import React from 'react'
import * as G from "./style";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp, FaTrash } from 'react-icons/fa';

function GridItem({item,onDelete}) {
  return (
    <G.Tr>
        <G.Td>{item.desc}</G.Td>
        <G.Td>{item.amount}</G.Td>
        <G.Td alignCenter >
            {item.expense?(
                <FaRegArrowAltCircleDown color="red"/>
            ):(
               <FaRegArrowAltCircleUp color="green"/> 
            )
        }

        </G.Td>

        <G.Td alignCenter>
            <FaTrash onClick={()=> onDelete(item.id)}/>
        </G.Td>

    </G.Tr>
  )
}

export default GridItem;