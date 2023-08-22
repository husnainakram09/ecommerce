import React, { FC, useState } from "react";
import { Box, Divider, Spacer, Stack, Text } from '@chakra-ui/react'
import HaktoButton from '@ui/Button'
import Cart from '@ui/Cart'
import { Icon, createIcon } from '@chakra-ui/react'
interface IProps {
    img: any
};

const ProductCard: FC<IProps> = ({ img }) => {
    const [isMouseEnter, setIsMouseEnter] = useState(false)
    const handleMouseEnter = () => {
        setIsMouseEnter(true)
    }
    const handleMouseLeave = () => {
        setIsMouseEnter(false)
    }
    const CircleIcon = (props: any) => (
        <Icon viewBox='0 0 200 200' {...props}>
            <path
                fill='currentColor'
                d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
            />
        </Icon>
    )
    return (
        <Box>
            <Stack h={260} w={270} m={2} borderRadius={10} boxShadow={"0px 0px 25px 0px rgba(0, 0, 0, 0.1)"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} cursor={'pointer'}>
                <Stack h={"100%"} height={"200%"} borderRadius={10} justify={"flex-end"} bgImage={img} bgSize={"10"} bgPos={"center"} bgColor={!isMouseEnter ? '#F6F7FB' : '#EBF4F3'} bgRepeat={"no-repeat"} pos={"relative"}>
                    {isMouseEnter &&
                        <Stack p={2} justifyContent={'start'}>
                            <Cart isLatest={true} />
                        </Stack>
                    }
                </Stack>

            </Stack>
            <Stack display={'flex'} alignItems={'center'} gap={0}>
                <Text fontSize={18} textAlign={'start'} color={'#151875'}>
                    Cantilever chair
                </Text>
                <Box>
                    <CircleIcon boxSize={4} color='#DE9034' />
                    <CircleIcon boxSize={4} color='#EC42A2' />
                    <CircleIcon boxSize={4} color='#8568FF' />
                </Box>
                <Box display={'flex'} gap={5}>
                    <Text fontSize={18} color={'#151875'}>
                        $42.00
                    </Text>
                    <Text fontSize={18} as={'del'} color={'#FB2E86'}>
                        $52.00
                    </Text>
                </Box>

            </Stack>
        </Box>
    )
};

export default ProductCard;