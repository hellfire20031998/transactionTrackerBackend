import express from 'express';
import Transaction from '../models/transaction.js'; // Adjust path based on your folder structure



const getAllTransactions = async (req, res)=>{
    try {
        const transactions = await Transaction.find();
        
        res.status(200).json(transactions);
    } catch (err) {
        console.error('Error fetching transactions:', err);
        res.status(500).json({ message: 'Server error' });
    }
}

export default getAllTransactions;
