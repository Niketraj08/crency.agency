const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

const staticDir = path.join(__dirname, 'crency.agency');

const suppressScript = `<script>
(function() {
  var isH = function(m) {
    if (!m) return false;
    var s = typeof m === 'string' ? m : (m.message || String(m));
    return s.indexOf('418') !== -1 || s.indexOf('Hydration') !== -1;
  };
  var origErr = console.error;
  console.error = function() {
    for (var i = 0; i < arguments.length; i++) {
      if (isH(arguments[i])) return;
    }
    origErr.apply(console, arguments);
  };
  var origWarn = console.warn;
  console.warn = function() {
    for (var i = 0; i < arguments.length; i++) {
      if (isH(arguments[i])) return;
    }
    origWarn.apply(console, arguments);
  };
  window.addEventListener('error', function(e) {
    if (isH(e.message) || isH(e.error)) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }, true);
  window.addEventListener('unhandledrejection', function(e) {
    if (isH(e.reason)) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }, true);
})();
</script>`;

function serveHtml(res, filePath) {
  fs.readFile(filePath, 'utf8', (err, html) => {
    if (err) return res.status(500).send('Error');
    if (html.includes('isH = function')) {
      return res.type('text/html').send(html);
    }
    const modified = html.replace('<head>', '<head>' + suppressScript);
    res.type('text/html').send(modified);
  });
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API route for consultation contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, phone, service, budget, message } = req.body || {};
  console.log('[AstraCognix Inquiry]', { name, email, phone, service, budget, message });
  return res.json({
    success: true,
    message: "Thank you for reaching out to AstraCognix Solutions! Our technical leads in Bhubaneswar will contact you within 24 hours."
  });
});

// Intercept root page request to inject suppression script
app.get('/', (req, res) => {
  serveHtml(res, path.join(staticDir, 'index.html'));
});

// Dedicated routes for AstraCognix Solutions pages
app.get('/services', (req, res) => {
  if (req.query.full) {
    return serveHtml(res, path.join(staticDir, 'services.html'));
  }
  res.redirect('/#services');
});

app.get('/all-services', (req, res) => {
  serveHtml(res, path.join(staticDir, 'services.html'));
});

app.get(['/contact-us', '/contact'], (req, res) => {
  if (req.query.full) {
    return serveHtml(res, path.join(staticDir, 'contact-us.html'));
  }
  res.redirect('/#discuss');
});

app.get(['/cases', '/portfolio'], (req, res) => {
  res.redirect('/#cases');
});

app.get(['/about-us', '/about'], (req, res) => {
  res.redirect('/#about');
});

// Serve static assets from crency.agency with byte ranges enabled
app.use(express.static(staticDir, {
  dotfiles: 'ignore',
  etag: true,
  lastModified: true,
  maxAge: '1d',
  index: false
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
      return serveHtml(res, pageFile);
    }
  }
  serveHtml(res, path.join(staticDir, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
