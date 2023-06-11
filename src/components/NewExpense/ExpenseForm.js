import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm  = () => {

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });
    // const [enteredTitle, setEnteredTitle] = useState('')// store state
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        });
    }

    const amountChangeHandler = (event)=> {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        });
    }

    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        });
    }

    // const titleChangeHandler = (event) => {
    //     setEnteredTitle(event.target.value);
    // }


    return <div>
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" onChange={amountChangeHandler} min="0.01" step="0.01"/>
                </div>
                <div className="new-expense__control">
                    <label>date</label>
                    <input type="date" onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    </div>
}

export default ExpenseForm;