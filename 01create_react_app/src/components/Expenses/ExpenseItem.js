import  './ExpenseItem.css'
// import {useState} from 'react'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Cart from '../UI/Card';
import { useState } from 'react';
const ExpenseItem =  ({index,title , date , amount ,LocationOfExpenditure , onDeleteExpense}) =>{
const [newAmount , setNewAmount] = useState(amount);

  // let newtitle = title
    const clickHandler = ()=>{
  //  newtitle = "updated title"
  // setTtile('updatedtitle1')
  //  console.log(newtitle)
  onDeleteExpense(index);
  
  }
  const changeAmount = ()=>{
    setNewAmount("100");
  }
  return(
   <Cart className="expense-item">
    <ExpenseDate date ={date}/>
    <ExpenseDetails amount={newAmount} title={title} LocationOfExpenditure={LocationOfExpenditure}/>
    <button onClick={clickHandler}>click me</button>    
    <button onClick={changeAmount}>ChangeAmount</button>    
    {/* <button onClick={()=>{console.log("click")}}>click me</button>     */}
   </Cart>
  );

}



export default  ExpenseItem;