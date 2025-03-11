import express from 'express';
import cors from 'cors';
import connectDB from './database/db.js'; // Make sure you add .js if using ESModules
import allTrans from './routes/getAllTransactions.js';
import createTransaction from './routes/createTransaction.js'
import getTransById from './routes/getTransById.js'
import updateTransaction from './routes/updateTrans.js';
import deleteTransById from './routes/deleteTransaction.js';
import getPaymentType from './routes/getPaymentType.js'
import getTransactionsByMonth from './routes/getTransactionsByMonth.js'
import getAllPaymentByType from './routes/getPaymentByType.js';



const app = express();

// Connect to database
const startServer = async () => {
    try {
        await connectDB();
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Failed to connect to database:', err);
        process.exit(1); // Exit process if DB connection fails
    }
};

app.use(cors());
app.use(express.json()); // Important for parsing JSON request bodies

app.get('/', allTrans); // Updated route path for clarity
app.post('/create',createTransaction);
app.get('/read/:id',getTransById)
app.put('/update/:id',updateTransaction)
app.delete('/delete/:id',deleteTransById)
app.get('/type',getPaymentType);
app.get('/month',getTransactionsByMonth);
app.get('/getAllPaymentByType',getAllPaymentByType);








app.listen(8081, () => {
    console.log('Server is listening on port 8081');
});

startServer();
