const express = require('express');

const app = express();
app.use(express.json());

// Root service endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    service: 'student-test-express-a',
    student: 'Student A',
    status: 'online'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok'
  });
});

module.exports = app;
