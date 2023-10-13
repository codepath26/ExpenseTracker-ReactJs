import Cart from '../UI/Card'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import { useState } from 'react'

const Expenses =({expenses})=>{
  const [expenseList , setExpenses] = useState(expenses);
  
  const deleteExpenseHandler = (id)=>{
    console.log(id);
 const updatedExpenses = expenseList.filter((expense , i)=> i !== id)
 console.log(updatedExpenses)
 console.log(expenses)
 setExpenses(updatedExpenses);
  }
  return (
   <Cart className='expenses'>
  {
    expenses.map((expense , index)=>(
      <ExpenseItem 
       key={index}
       index = {index}
       title ={expense.title} 
       amount={expense.amount} 
       date={expense.date} 
       LocationOfExpenditure ={expense.LocationOfExpenditure}
       onDeleteExpense = {deleteExpenseHandler}
       />
    ))
  } 
  </Cart>
  )
}
export default Expenses;