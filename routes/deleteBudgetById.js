import monthlyBugdet from '../models/monthlyBugdet.js';

const deleteTransById = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
        const transaction = await monthlyBugdet.deleteOne({ _id: id }); // Fix: pass filter object
        if (transaction.deletedCount === 0) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        res.status(200).json({ message: 'Transaction deleted successfully' });
    } catch (err) {
        console.error('Error deleting transaction:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

export default deleteTransById;
