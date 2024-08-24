import React from 'react'

const CountComp = ({text,count}) => {
    console.log(`Rendering ${text} component`);
    return (
        <div>
           <strong>{text}</strong> : <strong>{count}</strong>
        </div>
    )
}

export default React.memo(CountComp);
