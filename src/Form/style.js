import styled from "styled-components";

export const Container = styled.div`
max-width:1120px;
 width:98%;
 margin:0 auto;
 gap:10px;
 margin:20px auto;
 display:flex;
 padding:15px 0px;
 justify-content:space-around;
 border-radius:5px;
 background-color:#fff;
 box-shadow:0px 0px 5px #ccc;

 @media (max-width:750px){
    display:grid;
 }
`;

export const InputContent= styled.div`
display:flex;
flex-direction:column;

`;

export const Label = styled.label``;

export const Input = styled.input`
outline:none;
border-radius:5px;
padding : 5px 10px;
font-size:15px;
border:1px solid #ccc;
`;

export const RadioGroup = styled.div`
display:flex;
align-items:center;

input{
    margin-left:20px;
    accent-color:black;
    margin-top:0;
    margin-right:5px;
}

`;

export const Button = styled.button`
 padding:5px 10px;
 border:none;
 border-radius:5px;
 cursor:pointer;
 color:white;
 background-color:teal;

`;