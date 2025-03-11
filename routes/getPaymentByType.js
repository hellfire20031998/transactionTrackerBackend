import Transaction from "../models/transaction.js";
import ExpenseType from "../models/expenseType.js";


const getAllPaymentByType = async (req, res) => {
    try {
        const payments = await Transaction.aggregate([
            {
                $group: {
                    _id: "$method",
                    value: { $sum: "$amount" }  // Renamed for pie chart compatibility
                }
            }
        ]);

        const expenseType= await Transaction.aggregate([
            {
                $group:{
                    _id:"$expenseType",
                    value:{$sum:"$amount"}
                }
            }
        ])

        // Rename `_id` to `name` for better readability in the pie chart
        const formattedData = payments.map(payment => ({
            name: payment._id,
            value: payment.value
        }));

        res.status(200).json({formattedData,expenseType});
    } catch (error) {
        console.error('Error fetching payments by type:', error);
        res.status(500).json({ message: 'Server error', error });
    }
}

export default getAllPaymentByType
