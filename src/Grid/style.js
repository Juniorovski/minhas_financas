import styled from "styled-components";

export const Table= styled.table`

max-width:1120px;
 width:98%;
 margin:0 auto;
 margin:20px auto;
 padding:20px;
 justify-content:space-around;
 border-radius:5px;
 background-color:#fff;
 box-shadow:0px 0px 5px #ccc;
 gap:20px;


`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
border-bottom:inset;
padding-bottom:5px;
text-align:${(props) => (props.alignCenter ? "center" : "start") };
width : ${(props )=> (props.width ? props.width + "%" : "auto")};

`;