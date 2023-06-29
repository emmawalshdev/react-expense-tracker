import './Expenses.css'
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem"; // use expenseitem and pass app props to this
import React, {useState} from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpensesChart';

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




  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter setDate={selectedDate} filterByDate={handleUpdatedDate}/>
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
  )
}

export default Expenses;