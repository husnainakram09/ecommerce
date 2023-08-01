import { Box, Stack, Text } from '@chakra-ui/react'
import HaktoButton from '@ui/Button'
import React, { useState } from 'react'

const ProductCard = () => {
    const [isMouseEnter, setIsMouseEnter] = useState(false)
    const handleMouseEnter = () => {
        setIsMouseEnter(true)
    }
    const handleMouseLeave = () => {
        setIsMouseEnter(false)
    }
    return (
        <>
            <Stack h={360} w={270} m={2} boxShadow={"0px 0px 25px 0px rgba(0, 0, 0, 0.10)"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} cursor={'pointer'}>
                <Stack h={"100%"} height={"200%"} align={"center"} justify={"flex-end"} bgImage={"/Assets/chair.png"} bgSize={"contain"} bgPos={"center"} bgColor={"#fff9"} bgRepeat={"no-repeat"} pos={"relative"}>
                    {isMouseEnter &&
                        <HaktoButton text={"View Details"} type='success' />
                    }
                </Stack>
                <Box h="100%" textAlign={"center"} transition={'.3s ease'} bgColor={isMouseEnter ? "secondaryBlue.100" : "transparent"}>
                    <Text fontSize={24} color={isMouseEnter ? "white" : 'primary.100'}>
                        Cantilever chair
                    </Text>
                    <Text fontSize={18} color={isMouseEnter ? "white" : 'secondaryBlue.100'}>
                        Code - Y523201
                    </Text>
                    <Text fontSize={18} color={isMouseEnter ? "white" : 'secondaryBlue.100'}>
                        $42.00
                    </Text>
                </Box>
            </Stack>
        </>
    )
}

export default ProductCard