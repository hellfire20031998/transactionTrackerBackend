import mongoose from 'mongoose';


const monUri="mongodb+srv://tonu8707:gVvIQGzLaMP6jbkF@trackercluster.tyksg.mongodb.net/?retryWrites=true&w=majority&appName=trackerCluster"

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
