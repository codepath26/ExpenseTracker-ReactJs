import  './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
function ExpenseItem ({title , date , amount ,LocationOfExpenditure}){
 
  return(
   <div className="expense-item">
    <ExpenseDate date ={date}/>
    <ExpenseDetails amount={amount} title={title} LocationOfExpenditure={LocationOfExpenditure}/>    
   </div>
  );

}

// this is the simple method for the props
// function ExpenseItem (props){
 
//   return(
//    <div className="expense-item">
//     <div>{props.date}</div>
//     <div className="expense-item__description">
//       <h2>{props.title}</h2>
//       <div className="expense-item__price">${props.amount}</div>
//     </div>
//    </div>
//   );

// }

export default  ExpenseItem;