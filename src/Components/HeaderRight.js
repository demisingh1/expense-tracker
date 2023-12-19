import React from 'react'
import '../App.css';
import Chart from 'react-apexcharts'
import { useExpenseContext } from '../Context/Expense_Context';

const options = {
  labels:['income', 'expense'],
  colors:["#088F8F",'#F44336']
}

const HeaderRight = () => {
  const{totalIncome, totalExpense} = useExpenseContext();
  return (
    <div className='header-right'>HeaderRight
    <Chart options={options} type='donut' series={[totalIncome , totalExpense]} width={500} height={500} />
    </div>
  )
}

export default HeaderRight