import React from 'react'

function ContainerXl({ children, className }) {
    return (
        <div className={`max-w-screen-2xl mx-auto ${className}`} >
            {children}
        </div >
    )
}

export default ContainerXl