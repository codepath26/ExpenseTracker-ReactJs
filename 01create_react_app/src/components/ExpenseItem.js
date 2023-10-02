import  './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
function ExpenseItem ({title , date , amount ,LocationOfExpenditure}){
 
  return(
   <div className="expense-item">
    <ExpenseDate date ={date}/>
    <div className="expense-item__description">
      <h2>{title}<span>({LocationOfExpenditure})</span></h2>
      <div className="expense-item__price">${amount}</div>
    </div>
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