import MonthlyBudget from "../models/monthlyBugdet.js";



const getMonthlyBudget = async(req,res)=>{


    try{
        const budget= await MonthlyBudget.find();
        res.status(200).json(budget);
        

    }catch(err){
        console.log(err)
    }
}

export default getMonthlyBudget