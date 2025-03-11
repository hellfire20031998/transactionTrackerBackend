import ExpenseType from "../models/expenseType.js";

const getExpenseType= async (req,res)=>{
    try {
        const transactions = await ExpenseType.find();
        
        res.status(200).json(transactions);
    } catch (err) {
        console.error('Error fetching transactions:', err);
        res.status(500).json({ message: 'Server error' });
    }
    
}



export default getExpenseType