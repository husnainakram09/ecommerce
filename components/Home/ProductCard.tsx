import { Box, Divider, Spacer, Stack, Text } from '@chakra-ui/react'
import HaktoButton from '@ui/Button'
import Cart from '@ui/Cart'
import React, { FC, useState } from 'react'

interface IProps {
    img: string
};

const ProductCard: FC<IProps> = ({ img }) => {
    const [isMouseEnter, setIsMouseEnter] = useState(false)
    const handleMouseEnter = () => {
        setIsMouseEnter(true)
    }
    const handleMouseLeave = () => {
        setIsMouseEnter(false)
    }
    return (
        <>
            <Stack
                h={360}
                w={270}
                m={2}
                gap={0}
                borderRadius={10}
                boxShadow={"0px 0px 25px 0px rgba(0, 0, 0, 0.1)"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                cursor={'pointer'}
            >

                <Stack
                    h={"100%"}
                    height={"200%"}
                    borderRadius={"10px 10px 0 0"}
                    align={'flex-start'}
                    justify={"space-between"}
                    bgImage={img}
                    bgSize={isMouseEnter ? "50%" : "contain"}
                    bgPos={"center"}
                    bgColor={!isMouseEnter ? '#F6F7FB' : '#FFFFFF'}
                    bgRepeat={"no-repeat"}
                    pos={"relative"}
                >
                    {isMouseEnter &&
                        <Box p={2} >
                            <Cart />
                        </Box>
                    }

                    {isMouseEnter &&
                        <Box
                            display={'flex'}
                            justifyContent={'center'}
                            w={'100%'}
                            mb={1}
                        >
                            <HaktoButton
                                text={"View Details"}
                                type='success'
                            />
                        </Box>
                    }
                </Stack>
                <Box
                    h="100%"
                    textAlign={"center"}
                    transition={'.3s ease'}
                    borderRadius={"0 0 10px 10px"}
                    bgColor={isMouseEnter ? "secondaryBlue.100" : "transparent"}
                    p={'4'}
                >
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