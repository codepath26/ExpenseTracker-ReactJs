import ExpenseItem from "./components/ExpenseItem";


function App() {
  const expenses = [
    {title : "Food" , date : new Date(2012 , 4, 33),amount : 42.83, LocationOfExpenditure : "Madhbi Restro"},
    {title : "Study" , date : new Date(2011 , 8, 23),amount : 43.53, LocationOfExpenditure : "Deep Bookstole"},
    {title : "Petrol" , date : new Date(2022 , 6, 13),amount : 32.32, LocationOfExpenditure : "Nayara Palanpur"},
    {title : "Game" , date : new Date(2013 , 4, 5),amount : 40.43, LocationOfExpenditure : "Gaming Zone"},
  ];
  return (
    <div>
      <ExpenseItem  title ={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} LocationOfExpenditure ={expenses[0].LocationOfExpenditure}/>
      <ExpenseItem  title ={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} LocationOfExpenditure ={expenses[1].LocationOfExpenditure}/>
      <ExpenseItem  title ={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} LocationOfExpenditure ={expenses[2].LocationOfExpenditure}/>
      <ExpenseItem  title ={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} LocationOfExpenditure ={expenses[3].LocationOfExpenditure}/>
    </div>
  );
}

export default App;
