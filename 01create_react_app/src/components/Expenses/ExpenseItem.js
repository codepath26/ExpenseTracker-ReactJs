import  './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Cart from '../UI/Card';
const ExpenseItem =  ({title , date , amount ,LocationOfExpenditure}) =>{
 
  return(
   <Cart className="expense-item">
    <ExpenseDate date ={date}/>
    <ExpenseDetails amount={amount} title={title} LocationOfExpenditure={LocationOfExpenditure}/>    
   </Cart>
  );

}



export default  ExpenseItem;