// //Connect to MongoDB
// import mongoose from 'mongoose';

// const connectDB = async () => {
//   if (mongoose.connection.readyState >= 1) {
//     console.log('Database already connected');
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log('MongoDB connected successfully');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     throw new Error('MongoDB connection failed');
//   }
// };

// export default connectDB;
