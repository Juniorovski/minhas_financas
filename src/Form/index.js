import React, { useState } from "react";
import * as F from "./style";
import Grid from "../Grid";
function Form({handleAdd, transitionsList, SetTransitionsList}) {
  const [desc, SetDesc] = useState("");
  const [amount, SetAmount] = useState("");
  const [isExpense, SetExpense] = useState("");

  const generateID =() => Math.round(Math.random()*1000);

  const handleSave = ()=>{
    if(!desc || !amount){
        alert('Informe a descrição e o valor!')
        return;
    }
    else if(amount <1){
        alert('O valor tem que ser positivo!')
        return;
    }
    const transition = {
        id:generateID(),
        desc:desc,
        amount:amount,
        expense:isExpense,
    };

    handleAdd(transition);
    SetDesc("");
    SetAmount("");
  }

  return (
    <>
    <F.Container>

    <F.InputContent>
        <F.Label>Descrição</F.Label>
        <F.Input value={desc} onChange={(e)=> SetDesc(e.target.value)}/>
    </F.InputContent>
    <F.InputContent>
        <F.Label>Valor</F.Label>
        <F.Input 
          value={amount}
          type="number"
          onChange={(e)=> SetAmount(e.target.value)}/>
    </F.InputContent>
    <F.RadioGroup>
        <F.Input 
         type="radio"
         id="rIcome"
         defaultChecked
         name="group1"
         onChange={()=> SetExpense(!isExpense)}
        />
        <F.Label htmlFor="rIncome" >Entrada</F.Label>
    </F.RadioGroup>
    <F.RadioGroup>
        <F.Input 
         type="radio"
         id="rExpenses"
         name="group1"
         onChange={()=> SetExpense(!isExpense)}
        />
        <F.Label htmlFor="rExpenses" >Saida</F.Label>
    </F.RadioGroup>
<F.Button onClick={handleSave}>ADICIONAR</F.Button>
     </F.Container>
     <Grid itens={transitionsList} setItens={SetTransitionsList}/>
     </>
  )
 
}

export default Form;
