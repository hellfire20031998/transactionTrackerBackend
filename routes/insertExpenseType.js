// import mongoose from "mongoose";
// import ExpenseType from "../models/expenseType.js";

// const insertValues = async () => {
//     try {
//         const expenseTypes = [
//             { type: 'Travel' },
//             { type: 'Food' },
//             { type: 'Entertainment' },
//             { type: 'Shopping' },
//             { type: 'Healthcare' },
//             { type: 'Utilities' },
//             { type: 'Education' },
//             { type: 'Others' }
//         ];
        
//         // Insert into MongoDB
//         await ExpenseType.insertMany(expenseTypes);
//         console.log('Expense types inserted successfully');
//     } catch (err) {
//         console.log('Error inserting expense types:', err);
//     } finally {
//         mongoose.disconnect();
//     }
// }

// insertValues();
// export default insertValues;
