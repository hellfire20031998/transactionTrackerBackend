import MonthlyBudget from "../models/monthlyBugdet.js";

const createBudget= async (req,res) =>{
    const{month,expenseType,totalAmount}=req.body;

    if(!month || !expenseType || !totalAmount){
        console.log("All Fields are required")
    }
    const monthNum=new Date(month).getMonth;

    const existingBudget = await MonthlyBudget.findOneAndUpdate(
        { expenseType, month: new Date(month) },
            { totalAmount },
            { new: true }
       
    );

    if (existingBudget) {
        return res.status(200).json({ message: "Existing budget Updated" });
    }
    console.log("Hum chal gaye")

    try{
        const newBudget= new MonthlyBudget({
            expenseType,
            month,
            totalAmount
        })
        await newBudget.save();
        res.status(201).json(newBudget);
    }catch(err){
        console.log(err)
    }

}
export default createBudget;