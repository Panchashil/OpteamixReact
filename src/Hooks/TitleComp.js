import React from 'react'

const TitleComp = () => {
    console.log("Rendering Tilte component")
    return (
        <div>
            <h1>Use Of UseCallback Hook Component</h1>
        </div>
    )
}

export default React.memo(TitleComp) 
