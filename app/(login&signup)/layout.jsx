import React from 'react'
import ContainerFull from '../layouts/ContainerFull'

function Layout({ children }) {
    return (
        <ContainerFull className='relative min-h-screen flex overlay' style={{ background: "url(/images/stock/login2.png)", backgroundSize: "cover" }}>
            {children}
        </ContainerFull>
    )
}

export default Layout