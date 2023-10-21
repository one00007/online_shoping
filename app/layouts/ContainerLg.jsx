import React from 'react'

function ContainerLg({ children, className }) {
    return (
        <div className={`max-w-screen-lg mx-auto ${className}`} >
            {children}
        </div >
    )
}

export default ContainerLg