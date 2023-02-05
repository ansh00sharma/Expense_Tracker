import React, {useState} from "react";
import ExpenseItem from "./ExpenseItems";
import './ExpenseItemsWrap.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

function ExpenseItemsWrap(props){

  const[selectedyear,setselectedyear]= useState('2023');

  const selectYearHandler=selectedYear=>{
    setselectedyear(selectedYear);
  }

    return(
    <div>
        <Card className="expenses">
          <ExpensesFilter selected={selectedyear} onSelection={selectYearHandler}/>
          <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
          <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
          <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
          <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem>
      
        </Card>
    </div>
    );
}

export default ExpenseItemsWrap ;