import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
const monUri=process.env.MONGOOSE_KEY

// Connect to MongoDB Atlas
const connectDB = async () => {
    try {
        await mongoose.connect(monUri);
        console.log('Connected to MongoDB Atlas successfully!');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process on failure
    }
};
export default connectDB;
