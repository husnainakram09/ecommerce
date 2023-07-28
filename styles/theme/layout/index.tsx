import React, { ReactNode } from 'react'
import TopNav from './components/TopNavbar'
import WithSubnavigation from './components/Navbar'

interface propsType {
    children: ReactNode
}

const WebLayout: React.FC<propsType> = ({ children }) => {
    return (
        <div>
            <TopNav />
            <WithSubnavigation />
        </div>
    )
}

export default WebLayout
