
import mongoose from 'mongoose';

const expenseTypeSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        unique: true
    }
});

const ExpenseType = mongoose.model('ExpenseType', expenseTypeSchema);

export default ExpenseType;