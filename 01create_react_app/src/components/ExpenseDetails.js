import  './ExpenseItem.css'
function ExpenseDetails ({amount , title , LocationOfExpenditure}){
  return (
    <div className="expense-item__description">
      <h2>{title}<span>({LocationOfExpenditure})</span></h2>
      <div className="expense-item__price">${amount}</div>
    </div>
  )
}


export default ExpenseDetails;