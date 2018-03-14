// Register the API routes with express router
import express from 'express';

import {
  signUp,
  signIn
} from '../controllers';

// Express router
const router = express.Router();

router.get('/', (req, res) =>
  res.status(200).json('Welcome to the TopChat API'));
router.route('/signup')
  .get(signUp);
router.route('/signin')
  .get(signIn);

export default router;
