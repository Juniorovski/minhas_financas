import React from 'react'
import * as R from './styles'
import ResumeItems from '../../ResumeItem';

import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

function Resume({income,expense, total}) {
  return (
    <R.Container>
        <ResumeItems  title="Entrada" Icon={FaRegArrowAltCircleUp} value={income}/>
        <ResumeItems  title="Saida" Icon={FaRegArrowAltCircleDown} value={expense}/>
        <ResumeItems  title="Total" Icon={FaDollarSign} value={total}/>
    </R.Container>
  )
}

export default Resume;
