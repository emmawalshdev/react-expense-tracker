import React, { useState } from "react";
import './ExpenseList.css'
import Expenses from "./Expenses";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {

    let expenseMessage = <p>No Expenses found.</p>

    if(props.items.length == 0){
        return <h2 className="expenses-list__fallback">
            {expenseMessage}
        </h2>
    }
    return (
        <ul className="expenses-list">
        {props.items.map((expense)=>( // render each expense item
          <ExpenseItem
            key={expense.id} // always add when mapping item lists
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        </ul>
    );
};

export default ExpenseList;