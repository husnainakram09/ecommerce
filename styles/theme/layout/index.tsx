import React, { ReactNode } from 'react'
import TopNav from './components/TopNavbar'
import WithSubnavigation from './components/Navbar'
import { Box } from '@chakra-ui/react'

interface propsType {
    children: ReactNode
}

const WebLayout: React.FC<propsType> = ({ children }) => {
    return (
        <div style={{ height: "100vh" }}>
            <TopNav />
            <WithSubnavigation />
            {children}
        </div>
    )
}

export default WebLayout
