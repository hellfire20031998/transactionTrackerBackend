import express from 'express';
import Transaction from '../models/transaction.js'; // Adjust path based on your folder structure


const createTransaction = async (req,res)=>{
    const { userName, userEmail, transactionId, amount, method, date, description } = req.body;

    if (!userName || !userEmail || !transactionId || !amount || !method || !date || !description) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newTransaction = new Transaction({
            userName,
            userEmail,
            transactionId,
            amount,
            method,
            date,
            description
        });

        await newTransaction.save();
       
        res.status(201).json(newTransaction);
    } catch (err) {
        console.error('Error creating transaction:', err);
        res.status(500).json({ message: 'Server error' });
    }
}

export default createTransaction;
