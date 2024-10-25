import React from 'react'

import * as C from './styles'

function ResumeItems({title, Icon, value}) {
    return (
       <C.Container>
         <C.Header>
            <C.HeaderTitle>{title}</C.HeaderTitle>
            <Icon />
         </C.Header>
         <C.Total>{value}</C.Total>
       </C.Container>
    )
}

export default ResumeItems;
