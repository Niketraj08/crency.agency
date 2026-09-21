const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

const staticDir = path.join(__dirname, 'crency.agency');

// Serve static assets from crency.agency with byte ranges enabled
app.use(express.static(staticDir, {
  dotfiles: 'ignore',
  etag: true,
  lastModified: true,
  maxAge: '1d'
}));

// Serve _DataURI folder if referenced
app.use('/_DataURI', express.static(path.join(__dirname, '_DataURI')));

// Dynamic proxy and cache for /wf/* assets (images, videos, svg)
app.get('/wf/*', async (req, res) => {
  const localFile = path.join(staticDir, req.path);
  if (fs.existsSync(localFile)) {
    return res.sendFile(localFile);
  }
  try {
    const upstreamUrl = 'https://crency.agency' + req.path;
    const fetchRes = await fetch(upstreamUrl);
    if (!fetchRes.ok) {
      return res.status(fetchRes.status).send('Asset not found');
    }
    const contentType = fetchRes.headers.get('content-type') || 'application/octet-stream';
    res.setHeader('Content-Type', contentType);
    const buffer = Buffer.from(await fetchRes.arrayBuffer());
    const dir = path.dirname(localFile);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFile(localFile, buffer, () => {});
    return res.send(buffer);
  } catch (err) {
    console.error('Error proxying asset:', req.path, err.message);
    return res.status(404).send('Not Found');
  }
});

// Proxy and fallback handler for chunks under /_next/static/chunks/
app.get('/_next/static/chunks/*', async (req, res) => {
  const localFile = path.join(staticDir, req.path);
  if (fs.existsSync(localFile)) {
    return res.sendFile(localFile);
  }
  try {
    const upstreamUrl = 'https://crency.agency' + req.path;
    const fetchRes = await fetch(upstreamUrl);
    if (fetchRes.ok) {
      const buf = Buffer.from(await fetchRes.arrayBuffer());
      const dir = path.dirname(localFile);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFile(localFile, buf, () => {});
      res.setHeader('Content-Type', 'application/javascript');
      return res.send(buf);
    }
  } catch (err) {}

  // Fallback empty chunk stub to prevent ChunkLoadError
  const filename = path.basename(req.path);
  const chunkMatch = filename.match(/^([0-9a-zA-Z_-]+?)(?:\.[0-9a-f]+)?\.js$/);
  const chunkId = chunkMatch ? chunkMatch[1] : '';
  res.setHeader('Content-Type', 'application/javascript');
  res.status(200).send(`(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[${JSON.stringify(chunkId)}], {}]);\n`);
});

// Subpage HTML routing and SPA fallback
app.get('*', (req, res) => {
  if (req.path.includes('.') || req.path.startsWith('/_next/')) {
    return res.status(404).type('text/plain').send('Not Found');
  }
  const cleanPath = req.path.replace(/\/+$/, '');
  if (cleanPath) {
    const pageFile = path.join(staticDir, cleanPath.slice(1) + '.html');
    if (fs.existsSync(pageFile)) {
      return res.sendFile(pageFile);
    }
  }
  res.sendFile(path.join(staticDir, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
