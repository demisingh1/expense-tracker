import { createContext, useContext, useEffect, useState } from "react";
import { Expense } from "../data/ExpenseData";
 
const ExpenseContext = createContext();

const initialState = {
    entries:Expense,
    totalIncome:0,
    totalExpense:0,
    balance:0
}

export const ExpenseProvider = ({children}) =>{
const[state, setState] = useState(initialState)
const {entries} = state;

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
    setState({...state, totalIncome:incomeAmountTotal ,
        totalExpense:expenseAmountTotal, 
        balance:incomeAmountTotal-expenseAmountTotal});
},[state.entries])

    return <ExpenseContext.Provider value ={{...state}}>
        {children}
    </ExpenseContext.Provider>
}

export const useExpenseContext = ()=>{
    return useContext(ExpenseContext);
}