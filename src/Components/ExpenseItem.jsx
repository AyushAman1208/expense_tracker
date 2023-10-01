import React from 'react'
import classes from './ExpenseItem.module.css'
import AddExpense from './AddExpense'

const ExpenseItem = (props) => {
  let title = ""
  let date = ""
  let amount = ""


  return (


    <>
    
      <div className={classes.container}>
        <div className={classes.date}>{props.date}</div>
        <div className={classes.expenses}>
          <div className={classes.expenseTitle}>{props.title}</div>
          <div className={classes.expenseAmount}>{props.amount}</div>
        </div>
      </div>
    </>
  )
}

export default ExpenseItem