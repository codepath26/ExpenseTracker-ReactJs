import Cart from '../UI/Card'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'

const Expenses =({expenses})=>{
  return (
   <Cart className='expenses'>
    <ExpenseItem  title ={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} LocationOfExpenditure ={expenses[0].LocationOfExpenditure}/>
      <ExpenseItem  title ={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} LocationOfExpenditure ={expenses[1].LocationOfExpenditure}/>
      <ExpenseItem  title ={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} LocationOfExpenditure ={expenses[2].LocationOfExpenditure}/>
      <ExpenseItem  title ={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} LocationOfExpenditure ={expenses[3].LocationOfExpenditure}/>
   </Cart>
  )
}
export default Expenses;