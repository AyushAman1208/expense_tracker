import React from 'react'
import ExpenseItem from './ExpenseItem'

const Expenses = () => {
    let expenseItem1 = {title:"Food",amount:250,date:'12-09-2023'}
    let expenseItem2= {title:"Rent",amount:8500,date:'12-09-2022'}
    let expenseItem3 = {title:"Travel",amount:1000,date:'12-09-2021'}
    let expenseItem4 = {title:"Misc",amount:2500,date:'12-09-2020'}
  return (
    <>
    <ExpenseItem title = {expenseItem1.title} amount={expenseItem1.amount} date = {expenseItem1.date}/>
    <ExpenseItem title = {expenseItem2.title} amount={expenseItem2.amount} date={expenseItem2.date}/>
    <ExpenseItem title = {expenseItem3.title} amount={expenseItem3.amount} date={expenseItem3.date}/>
    <ExpenseItem title = {expenseItem4.title} amount={expenseItem4.amount} date={expenseItem4.date}/>

    </>
  )
}

export default Expenses