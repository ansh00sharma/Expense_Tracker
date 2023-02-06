import React, {useState} from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

function NewExpense(props){

    const [formModal, setformModal] = useState(false);

    const ModalHandler=()=>{
        setformModal(true);
    }

    const cancelModalHandler=()=>{
        setformModal(false);
    }

    const SavedData=(EnteredData)=>{

        const enteredData =  {
            ...EnteredData,
            id : Math.random().toString()

        };
       props.onAddExpense(enteredData);
       setformModal(false);

    }

    return (
    <div className='new-expense'>
        {!formModal &&  <button onClick={ModalHandler}>Add New Expense</button>}
        {formModal && <NewExpenseForm onSave={SavedData} onCancel ={cancelModalHandler}/>}
    </div>
    );
};

export default NewExpense;