// import mongoose from "mongoose";
// import PaymentType from "../models/transcationType";


// const insertPaymentTypes = async () => {
//     try {
//         const paymentTypes = [
//             { typeOfPayment: 'Credit Card' },
//             { typeOfPayment: 'Debit Card' },
//             { typeOfPayment: 'Net Banking' },
//             { typeOfPayment: 'UPI' },
//             { typeOfPayment: 'Cash' }
//         ];

//         await PaymentType.insertMany(paymentTypes);
//         console.log('Payment types inserted successfully');

//         mongoose.disconnect();
//     } catch (error) {
//         console.error('Error inserting payment types:', error);
//     }
// };

// export default insertPaymentTypes;