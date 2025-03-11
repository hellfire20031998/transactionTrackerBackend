import mongoose from "mongoose";
import PaymentType from "../models/transcationType.js";


const getPaymentType= async (req,res)=>{
    try {
        const transactions = await PaymentType.find();
        
        res.status(200).json(transactions);
    } catch (err) {
        console.error('Error fetching transactions:', err);
        res.status(500).json({ message: 'Server error' });
    }
    
}



export default getPaymentType

