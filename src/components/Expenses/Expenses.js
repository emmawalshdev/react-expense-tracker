import './Expenses.css'
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem"; // use expenseitem and pass app props to this
import React, {useState} from 'react';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
  // use passed in expenseitem

  const [selectedDate, setSelectedDate] = useState('2021');

  const handleUpdatedDate = (newDate) => {
    setSelectedDate(newDate); 
    console.log(newDate);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedDate;
  });

  let expenseMessage = <p>No Expenses found.</p>

  if (filteredExpenses.length > 0){
    expenseMessage = filteredExpenses.map((expense)=>( // render each expense item
      <ExpenseItem
        key={expense.id} // always add when mapping item lists
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <div>
      <ExpenseFilter setDate={selectedDate} filterByDate={handleUpdatedDate}/>
      <Card className="expenses">
        {expenseMessage}
      </Card>
    </div>
  )
}

export default Expenses;