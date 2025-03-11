import MonthlyBudget from "../models/monthlyBugdet.js";
import Transaction from "../models/transaction.js";

const compareBudget = async (req, res) => {
    const { month, year } = req.body;

    if (!month || !year) {
        return res.status(400).json({ message: "Month and year are required" });
    }

    try {
        const startOfMonth = new Date(year, month - 1, 1); // month - 1 because JS months are 0-based
        const endOfMonth = new Date(year, month, 1); // First day of next month

        // Transactions grouped by expenseType and summed amounts
        const transactionByExpenseType = await Transaction.aggregate([
            {
                $match: {
                    date: { $gte: startOfMonth, $lt: endOfMonth }
                }
            },
            {
                $group: {
                    _id: "$expenseType",
                    totalSpent: { $sum: "$amount" }
                }
            }
        ]);

        // Monthly budgets grouped by expenseType
        const monthlyByExpenseType = await MonthlyBudget.aggregate([
            {
                $match: {
                    month: { $gte: startOfMonth, $lt: endOfMonth }
                }
            },
            {
                $group: {
                    _id: "$expenseType",
                    totalBudget: { $sum: "$totalAmount" }
                }
            }
        ]);

        res.status(200).json({ transactionByExpenseType, monthlyByExpenseType });
    } catch (error) {
        console.error('Error comparing budget:', error);
        res.status(500).json({ message: "Server error", error });
    }
};

export default compareBudget;
