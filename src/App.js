
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Resume from './components/Resume';
import Form from './Form';
import Global from './styles/global';

function App() {
const data = localStorage.getItem("transitions");

const [transitionsList, SetTransitionsList]= useState( 
  data ? JSON.parse(data) : []
);

const [income,SetIcome]=useState(0);
const[expense, SetExpense]=useState(0);
const [total , SetTotal]= useState(0);


useEffect(()=>{
const amountExpense = transitionsList
.filter((item)=>item.expense)
.map((transition)=>Number(transition.amount));

const amountIcome = transitionsList
.filter((item)=> !item.expense)
.map((transition)=>Number(transition.amount));

const expense = amountExpense.reduce((acc,cur)=> acc + cur,0).toFixed(2);
const income = amountIcome.reduce((acc, cur)=> acc + cur , 0).toFixed(2);

const total = Math.abs(income - expense).toFixed(2);

SetIcome(`R$ ${income}`);
SetExpense(`R$ ${expense}`);
SetTotal(`${Number(income) < Number(expense)? "-" : ""} R$ ${total}`);
   
},[transitionsList])

 const handleAdd=(transition)=>{
  const newArrayTransitions = [...transitionsList,transition];

  SetTransitionsList (newArrayTransitions);
  localStorage.setItem("transitions", JSON.stringify(newArrayTransitions));
 }
  return (

      <>
     <Header/>
     <Resume income={income} expense={expense} total={total}/>
     <Form handleAdd={handleAdd} transitionsList={transitionsList} SetTransitionsList={SetTransitionsList}/>
     <Global/>
      </>
    
  );
}

export default App;
