import React from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

function NewExpense(props){

    const SavedData=(EnteredData)=>{

        const enteredData =  {
            ...EnteredData,
            id : Math.random().toString()

        };
       props.onAddExpense(enteredData);

    }

    return (
    <div className='new-expense'>
            <NewExpenseForm onSave={SavedData}/>
    </div>
    );
};

export default NewExpense;