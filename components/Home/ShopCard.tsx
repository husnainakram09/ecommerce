import { Box, Divider, Spacer, Stack, Text } from '@chakra-ui/react'
import HaktoButton from '@ui/Button'
import Cart from '@ui/Cart'
import Image from 'next/image'
import React, { useState } from 'react'
const ShopCard = () => {
    const [isMouseEnter, setIsMouseEnter] = useState(false)
    const handleMouseEnter = () => {
        setIsMouseEnter(true)
    }
    const handleMouseLeave = () => {
        setIsMouseEnter(false)
    }
    return (
        <>
            <Stack h={270} w={350} m={2} borderRadius={10} boxShadow={"0px 0px 25px 0px rgba(0, 0, 0, 0.1)"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} cursor={'pointer'}>
                <Image src={'/Assets/chair.png'} alt='' width={100} height={100}/>

            </Stack>
        </>
    )
}
export default ShopCard