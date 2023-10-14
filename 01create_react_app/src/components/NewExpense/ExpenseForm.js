import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = ()=>{
  const [ enteredTitle , setEnteredTitle] = useState('');
  const [ enteredDate , setEnteredDate] = useState('');
  const [ enteredAmount , setEnteredAmount] = useState('');
  const titleChangeHandler = (e)=>{
    console.log("before title change" ,enteredTitle)
    setEnteredTitle(e.target.value);
    console.log("After" ,enteredTitle)
  }
  const dateChangeHandler = (e)=>{
    setEnteredDate(e.target.value);
  }
  const amountChangeHandler = (e)=>{
    setEnteredAmount(e.target.value);
  }
return <form>
  <div className="new-expense__controls">
    <div className="new-expense__control">
      <label>Title</label>
      <input type="text"  onChange={titleChangeHandler}/>
    </div>
    <div className="new-expense__control">
      <label>Number</label>
      <input type="number" min="0.01" step="0.01"  onChange={amountChangeHandler}/>
    </div>
    <div className="new-expense__control">
      <label>Date</label>
      <input type="date" min="2023-01-01" max="2028-12-31" onChange={dateChangeHandler} />
    </div>
  </div>
  <div className="new-expense__actions">
    <button type = "submit"> Add Expense</button>
  </div>
</form>
}
export default ExpenseForm;