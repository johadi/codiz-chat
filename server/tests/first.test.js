import { assert } from 'chai';
import request from 'supertest';
import app from '../server';

describe('First Test', () => {
  it('Should pass for API welcome route', (done) => {
    request(app)
      .get('/api')
      .expect(200)
      .end((err, res) => {
        assert.equal(res.body, 'Welcome to the Codizchat V1 API');
        done();
      });
  });
  it('Should pass for Signup', (done) => {
    request(app)
      .get('/api/signup')
      .expect(201)
      .end((err, res) => {
        assert.equal(res.body, 'Handle Sign up logic');
        done();
      });
  });
  it('Should pass for Signin', (done) => {
    request(app)
      .get('/api/signin')
      .expect(200)
      .end((err, res) => {
        assert.equal(res.body, 'Handle Sign in logic');
        done();
      });
  });
  it('Should pass', () => {
    assert.equal('Hello', 'Hello');
  });
});
