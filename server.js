const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

const staticDir = path.join(__dirname, 'crency.agency');

// Serve static assets from crency.agency
app.use(express.static(staticDir));

// Serve _DataURI folder if referenced
app.use('/_DataURI', express.static(path.join(__dirname, '_DataURI')));

// Fallback all navigation routes to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
