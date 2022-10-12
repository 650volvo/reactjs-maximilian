import React, { useState } from 'react';
import './ExpenseItem.css';
import ExDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log('expenseItem evaluated by React');
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  }
  return (
    <Card className="expense-item">
    <ExDate date={props.date}/>
      <div></div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;