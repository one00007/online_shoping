import React from 'react'

function ContainerFull({ children, className, style }) {
    return (
        <div className={` ${className}`} style={style}>
            {children}
        </div>
    )
}

export default ContainerFull