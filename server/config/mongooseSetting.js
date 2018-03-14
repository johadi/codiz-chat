import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logger from '../helpers/logger';

dotenv.config();

const mongooseSetting = () =>
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/topchat')
    .then(() => logger.info('Database Connected'))
    .catch((err) => {
      throw err;
    });

export default mongooseSetting;
