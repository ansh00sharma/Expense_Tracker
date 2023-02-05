import React, {useState} from 'react';
import './NewExpenseForm.css';
import './NewExpense.css';

function NewExpenseForm(props){
    const [Titlevalue, setTitlevalue] = useState('');
    const [Amountvalue, setAmountvalue] = useState('');
    const [Datevalue, setDatevalue] = useState('');

    const titleChangeHandler = (event)=>{
       setTitlevalue(event.target.value);
    };
    const amountChangeHandler = (event)=>{
        setAmountvalue(event.target.value);
     };
     const dateChangeHandler = (event)=>{
        setDatevalue(event.target.value);
     };

     const formSubmitHandler=(event)=>{
        event.preventDefault();

        const newData = {
            title : Titlevalue,
            amount : Amountvalue,
            date : new Date(Datevalue)
        };
        props.onSave(newData);
        setTitlevalue('');
        setAmountvalue('');
        setDatevalue('');
     };


    return(
        <form onSubmit={formSubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={Titlevalue} onChange={titleChangeHandler}></input>
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={Amountvalue} min="0.01" step="0.01" onChange={amountChangeHandler}></input>
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={Datevalue} min="2023-01-01" max="2025-01-01" onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className='new_expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>    
    )

}

export default NewExpenseForm;