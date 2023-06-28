import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm  = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('')// store state
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    const titleChangeHandler = (event) => {

        // setUserInput((prevState)=> { // when state needs to read prev state
        //     return { ...prevState, enteredTitle: event.target.value }
        // })
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event)=> {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitButtonHandler = (event) => {

        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData); // execute function in newExpense & pass in expenseData
        setEnteredTitle(''); // reset form values
        setEnteredAmount('');
        setEnteredDate('');

        if (expenseData.title !== ''){
            props.onCancel();
        }
    }

    const stopEditing = () => {
        props.onCancel();
    }


    return <div>
         <form onSubmit={submitButtonHandler} id="ExpenseForm">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                    <p>{setEnteredTitle}</p>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01"/>
                </div>
                <div className="new-expense__control">
                    <label>date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button type="button" onClick={stopEditing}>Cancel</button>
            </div>
        </form>
    </div>
}

export default ExpenseForm;