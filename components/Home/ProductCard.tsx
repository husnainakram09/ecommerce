import { Box, Divider, Spacer, Stack, Text } from '@chakra-ui/react'
import HaktoButton from '@ui/Button'
import Cart from '@ui/Cart'
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
            <Stack h={360} w={270} m={2} borderRadius={10} boxShadow={"0px 0px 25px 0px rgba(0, 0, 0, 0.1)"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} cursor={'pointer'}>

                {isMouseEnter &&
                    <Box p={2} >
                        <Cart />
                    </Box>
                }
                <Stack h={"100%"} height={"200%"} align={"center"} justify={"flex-end"} bgImage={"/Assets/chair.png"} bgSize={"contain"} bgPos={"center"} bgColor={!isMouseEnter ? '#F6F7FB' : '#FFFFFF'} bgRepeat={"no-repeat"} pos={"relative"}>

                </Stack>
                {isMouseEnter &&
                    <Box display={'flex'} justifyContent={'center'}>
                        <HaktoButton text={"View Details"} type='success' />
                    </Box>
                }
                <Box h="100%" textAlign={"center"} transition={'.3s ease'} bgColor={isMouseEnter ? "secondaryBlue.100" : "transparent"} p={'4'}>
                    <Text fontSize={24} color={isMouseEnter ? "white" : 'primary.100'}>
                        Cantilever chair
                    </Text>
                    <Box display="flex" justifyContent={'center'} gap={3}>
                        <Box w="30px" h="5px" bg="red.300" borderRadius="8px" />
                        <Box w="30px" h="5px" bg="blue.300" borderRadius="8px" />
                        <Box w="30px" h="5px" bg="green.300" borderRadius="8px" />
                    </Box>
                    <Text fontSize={18} color={isMouseEnter ? "white" : 'secondaryBlue.100'} mt={1}>
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