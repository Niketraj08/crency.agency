const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

const staticDir = path.join(__dirname, 'crency.agency');

// Serve static assets from crency.agency
app.use(express.static(staticDir));

// Serve _DataURI folder if referenced
app.use('/_DataURI', express.static(path.join(__dirname, '_DataURI')));

// Fallback handler for missing chunks under /_next/static/chunks/ to prevent ChunkLoadError
app.get('/_next/static/chunks/:chunkFile', (req, res) => {
  const chunkMatch = req.params.chunkFile.match(/^([0-9a-zA-Z_-]+?)(?:\.[0-9a-f]+)?\.js$/);
  const chunkId = chunkMatch ? chunkMatch[1] : '';
  res.setHeader('Content-Type', 'application/javascript');
  res.status(200).send(`(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[${JSON.stringify(chunkId)}], {}]);\n`);
});

// For any other missing asset with file extension or /_next/ path, return 404 instead of index.html
app.get('*', (req, res, next) => {
  if (req.path.includes('.') || req.path.startsWith('/_next/')) {
    return res.status(404).type('text/plain').send('Not Found');
  }
  res.sendFile(path.join(staticDir, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
