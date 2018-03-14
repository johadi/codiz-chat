import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongooseSetting = async () =>
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/topchat');

export default mongooseSetting;
