import React from 'react'
import ExpenseSummeryList from './ExpenseSummeryList'
import { useExpenseContext } from '../Context/Expense_Context'
import AddExpense from './AddExpense'

const ExpenseSummery = () => {
    const{entries} = useExpenseContext()
  return (
    <div className='container summery-container'>
        <h2>Summary Component</h2>
        <AddExpense />
        {/* // header of the list */}
        <div className='summary-list summary-list-heading' >
        <h3>Title</h3>
        <h3>income</h3>
        <h3>expense</h3>
        <h3>Amount</h3>
       </div>
       <div className='ExpenselistContainer'>
       {entries?.map((item)=>{
        return <ExpenseSummeryList  key={item.id} {...item}/>
       })}
       </div>
    </div>
  )
}

export default ExpenseSummery