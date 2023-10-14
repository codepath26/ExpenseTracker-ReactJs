import Cart from '../UI/Card'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import { useState } from 'react'
import ExpenseFilter from './ExpenseFilter'

const Expenses =({expenses})=>{
  const [expenseList , setExpenses] = useState(expenses);
  const [filteredYear , setFilteredYear] = useState('2020');
  
  const filterChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);
  }

  const deleteExpenseHandler = (id)=>{
    console.log(id);
 const updatedExpenses = expenseList.filter((expense , i)=> i !== id)
 console.log(updatedExpenses)
 console.log(expenses)
 setExpenses(updatedExpenses);
  }
  const filteredExpenses = expenses.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })
  return (
   <Cart className='expenses'>
    <ExpenseFilter selected={filteredYear} onChangeFilter = {filterChangeHandler}/>
  {
    filteredExpenses.map((expense , index)=>(
      <ExpenseItem 
       key={expense.id}
       index = {index}
       title ={expense.title} 
       amount={expense.amount} 
       date={expense.date} 
      //  LocationOfExpenditure ={expense.LocationOfExpenditure}  
       onDeleteExpense = {deleteExpenseHandler}
       />
    ))
  } 
  </Cart>
  )
}
export default Expenses;