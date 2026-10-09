const { describe, it } = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('../app');

describe('Student Test Express A API Endpoints', () => {
  it('GET / should return student service info', async () => {
    const res = await request(app).get('/');
    assert.strictEqual(res.statusCode, 200);
    assert.strictEqual(res.body.service, 'student-test-express-a');
    assert.strictEqual(res.body.student, 'Student A');
    assert.strictEqual(res.body.status, 'online');
  });

  it('GET /health should return ok status', async () => {
    const res = await request(app).get('/health');
    assert.strictEqual(res.statusCode, 200);
    assert.strictEqual(res.body.status, 'ok');
  });
});
