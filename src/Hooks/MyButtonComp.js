import { Button } from '@mui/material'
import React from 'react'

const MyButtonComp = ({incrementHandler,children}) => {
    console.log(` Rendering MyButton-${children}`)
    return (
        <div>
            <Button variant='contained' onClick={incrementHandler}> {children}</Button>
        </div>
    )
}

export default React.memo(MyButtonComp);
