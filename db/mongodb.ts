import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const connectMongo = async () => mongoose.connect(uri);

export default connectMongo;
