const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/wedding_planner');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Warning/Error: ${error.message}`);
    console.log('Running backend with memory/mock fallback mode if DB is unreachable.');
  }
};

module.exports = connectDB;
