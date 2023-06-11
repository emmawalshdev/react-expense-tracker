import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.js'
import React, {useState} from 'react';

const ExpenseItem = (props) => { //properties of app.js
    // render display of each row, use custom component card
    const [title, setTitle] = useState(props.title); // [managed value, update function]

    const clickHandler = () => {
        setTitle('Updated');
    }
    return (
        <Card className='expense-item'> 
            <div><ExpenseDate date={props.date}/></div> 
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>
                Update Title
            </button>
        </Card>
    );
}

export default ExpenseItem