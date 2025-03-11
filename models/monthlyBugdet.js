import mongoose from 'mongoose';

const monthlyBudgetSchema = new mongoose.Schema({
    expenseType: {
        type: String,
        required: true,
        enum: ['Food', 'Travel', 'Entertainment', 'Utilities', 'Others','Education','Shopping','Healthcare'] // Add more if needed
    },
    month: {
        type: Date,
        required: true,
        default:Date.now
    },
    totalAmount: {
        type: Number,
        required: true,
        min: 0
    }
}, { timestamps: true });

const MonthlyBudget = mongoose.model('MonthlyBudget', monthlyBudgetSchema);

export default MonthlyBudget;