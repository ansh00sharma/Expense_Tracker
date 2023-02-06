import React, {useState} from "react";
import './ExpenseItemsWrap.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function ExpenseItemsWrap(props){

  const[selectedyear,setselectedyear]= useState('2023');

  const selectYearHandler=selectedYear=>{
    setselectedyear(selectedYear);
  }

  const filteredyear = props.items.filter(expense => {
     return expense.date.getFullYear().toString() === selectedyear;
  });



    return(
    <div>
        <Card className="expenses">
          <ExpensesFilter selected={selectedyear} onSelection={selectYearHandler}/>
          <ExpenseChart expenses={filteredyear}/>
          <ExpenseList items={filteredyear}/>
        </Card>
    </div>
    );
}

export default ExpenseItemsWrap ;