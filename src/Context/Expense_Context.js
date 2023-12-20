import { createContext, useContext, useEffect, useState } from "react";
import { Expense } from "../data/ExpenseData";
 
const ExpenseContext = createContext();

const initialState = {
    entries:[],
    totalIncome:0,
    totalExpense:0,
    balance:0,
    AddExpense: false,
}

export const ExpenseProvider = ({children}) =>{
const[state, setState] = useState(initialState)
const {entries,AddExpense,totalExpense,totalIncome} = state;

// get each expense & income from an array
useEffect(()=>{
    let incomeValues = entries.filter((item)=> item.type === 'income');
    let incomeAmount = incomeValues.map((item)=> item.amount);
    let incomeAmountTotal = incomeAmount.reduce((total, val)=>{
       return total+val
    },0)
    // Expense Value total in three steps
    let expenseValues = entries.filter((item)=> item.type === 'expense');
    let expenseAmount = expenseValues.map((item)=> item.amount);
    let expenseAmountTotal = expenseAmount.reduce((total, val)=>{
       return total+val
    },0)
    setState({...state, totalIncome:totalIncome+incomeAmountTotal ,
        totalExpense:totalExpense+expenseAmountTotal, 
        balance:totalIncome-totalExpense});
},[])
// expense form handler
const expenseFormShowHandler =(e)=>{
    e.preventDefault();
    setState({...state, AddExpense:!AddExpense})
  }
  // submit expense
const createExpense =(inputs)=>{
    inputs.id = Date.now();
    console.log(inputs.type );
    if(inputs.type === 'income'){
      return  setState({...state, entries:[...state.entries, inputs],
            totalIncome:Number(totalIncome+inputs.amount)})
    }
    if(inputs.type === 'expense'){
       return setState({...state, entries:[...state.entries, inputs],
        totalExpense:Number(totalExpense+inputs.amount)})
    }

}
    return <ExpenseContext.Provider value ={{...state, expenseFormShowHandler,createExpense }}>
        {children}
    </ExpenseContext.Provider>
}

export const useExpenseContext = ()=>{
    return useContext(ExpenseContext);
}