import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card.js'

function ExpenseItem(props){ //properties of app.js
    // render display of each row, use custom component card
    return (
        <Card className='expense-item'> 
            <div><ExpenseDate date={props.date}/></div> 
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem