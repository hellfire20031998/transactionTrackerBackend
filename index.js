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
import getExpenseType from './routes/getExpenseType.js';
import createBudget from './routes/setMonthlyBugdet.js';
import getMonthlyBudget from './routes/getMonthlyBudget.js'
import deleteBudgetById from './routes/deleteBudgetById.js'
import compareBudget from './routes/compareBudget.js';
import dotenv from 'dotenv';
dotenv.config()
const PORT = process.env.PORT || 8085;
// console.log('All ENV:', process.env); // Debugging to see all env variables





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
app.get('/expenseType',getExpenseType);
app.post('/createBudget',createBudget)
app.get('/getBudget',getMonthlyBudget)
app.delete('/deleteBudget/:id',deleteBudgetById);
app.post('/compare',compareBudget)









app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

startServer();
