import React from 'react'
import classes from './AddExpense.module.css'
import { useState } from 'react'

const AddExpense = () => {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState()
    const [date, setDate] = useState(new Date())

    const onChangeTitleHandler = (event) =>{
        setTitle(event.target.value)
    }

    const onChangeAmountHandler = (event)=>{
        setAmount(event.target.value)
    }
    const onChangeDateHandler = (event) =>{
        setDate(event.target.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()
        setAmount(0)
        setTitle("")
        setDate(new Date())


    }
    return (
        <>
            <form className='body' onSubmit={onSubmitHandler}>
                <input type="text" name="title" id="title" className={classes.title} value={title} onChange={onChangeTitleHandler}/>
                <label htmlFor="title">Enter the expense title</label>
                <br />
                <input type="number" name="amount" id="amount" className={classes.amount} value={amount} onChange={onChangeAmountHandler}/>
                <label htmlFor="amount">Enter Amounnt</label>
                <br />
                <input type="date" name="date" id="date" className={classes.date} value={date} onChange={onChangeDateHandler}/>
                <label htmlFor="date">Enter date</label>
                <br />
                <button type="submit" onSubmit={onSubmitHandler}>Submit</button>
            </form>
        </>
    )
}

export default AddExpense