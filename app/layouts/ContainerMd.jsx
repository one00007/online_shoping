import React from 'react'

function ContainerMd({ children, className }) {
    return (
        <div className={`max-w-screen-md mx-auto ${className}`} >
            {children}
        </div >
    )
}

export default ContainerMd