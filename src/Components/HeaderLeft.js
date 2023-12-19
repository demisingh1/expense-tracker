import React from 'react'
import '../App.css';
import { useExpenseContext } from '../Context/Expense_Context';
const HeaderLeft = () => {
    const {totalIncome, totalExpense, balance} = useExpenseContext();
  return (
    <div className='header-left'>
        <h3>Total Income: {totalIncome}</h3>
        <h3>Total Expenses:{totalExpense}</h3>
        <h3>Balance:{balance}</h3>
    </div>
  )
}

export default HeaderLeft