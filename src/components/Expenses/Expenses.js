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
  }

  console.log(props + ' props');

  return (
    <div>
      <ExpenseFilter setDate={selectedDate} filterByDate={handleUpdatedDate}/>
      <Card className="expenses">
        {props.items.map((expense)=>(
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses;