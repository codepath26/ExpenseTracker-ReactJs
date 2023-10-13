import  './ExpenseItem.css'
// import {useState} from 'react'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Cart from '../UI/Card';
const ExpenseItem =  ({index,title , date , amount ,LocationOfExpenditure , onDeleteExpense}) =>{

  // let newtitle = title
    const clickHandler = ()=>{
  //  newtitle = "updated title"
  // setTtile('updatedtitle1')
  //  console.log(newtitle)
  onDeleteExpense(index);

  }
  return(
   <Cart className="expense-item">
    <ExpenseDate date ={date}/>
    <ExpenseDetails amount={amount} title={title} LocationOfExpenditure={LocationOfExpenditure}/>
    <button onClick={clickHandler}>click me</button>    
    {/* <button onClick={()=>{console.log("click")}}>click me</button>     */}
   </Cart>
  );

}



export default  ExpenseItem;