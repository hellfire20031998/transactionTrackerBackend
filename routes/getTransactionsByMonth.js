import Transaction from '../models/transaction.js';

const getTransactionsByMonth = async (req , res) => {
    try {
        const transactions = await Transaction.aggregate([
            {
                $group: {
                    _id: { $month: "$date" },
                    totalAmount: { $sum: "$amount" },
                    transactions: { $push: "$$ROOT" }
                }
            },
            { $sort: { "_id": 1 } }
        ]);

        // return transactions;
        res.status(200).json(transactions);
    } catch (error) {
        console.error('Error fetching transactions by month:', error);
        throw error;
    }
};

export default getTransactionsByMonth;