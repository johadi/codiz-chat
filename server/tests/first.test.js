import { assert } from 'chai';
import request from 'supertest';
import app from '../server';

describe('First Test', () => {
  it('Should pass', (done) => {
    request(app)
      .get('/api/signup')
      .expect(201)
      .end((err, res) => {
        done();
      });
  });
  it('Should pass', () => {
    assert.equal('Hello', 'Hello');
  });
});
