import express from 'express';
import Transaction from '../models/transaction.js'; // Adjust path based on your folder structure


const updateTransaction = async (req,res)=>{
    const { id } = req.params;
    const { userName, userEmail, amount, description, method } = req.body;

    if (!userName || !userEmail || !amount || !description) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const updatedTransaction = await Transaction.findByIdAndUpdate(id, {
            userName,
            userEmail,
            amount,
            description,
            method
        }, { new: true });

        if (!updatedTransaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        console.log("entry updated",updateTransaction)

        res.status(200).json(updatedTransaction);
    } catch (err) {
        console.error('Error updating transaction:', err);
        res.status(500).json({ message: 'Server error' });
    }
}

export default updateTransaction;
