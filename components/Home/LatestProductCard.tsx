import { Box, Divider, Spacer, Stack, Text } from '@chakra-ui/react'
import HaktoButton from '@ui/Button'
import Cart from '@ui/Cart'
import React, { FC, useState } from 'react'
interface IProps {
    img: string
};

const LatestProductCard: FC<IProps> = ({ img }) => {
    const [isMouseEnter, setIsMouseEnter] = useState(false)
    const handleMouseEnter = () => {
        setIsMouseEnter(true)
    }
    const handleMouseLeave = () => {
        setIsMouseEnter(false)
    }
    return (
        <>
            <Stack h={260} w={270} m={2} borderRadius={10} boxShadow={"0px 0px 25px 0px rgba(0, 0, 0, 0.1)"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} cursor={'pointer'}>
                <Stack h={"100%"} height={"200%"} justify={"flex-end"} bgImage={img} bgSize={"contain"} bgPos={"center"} bgColor={!isMouseEnter ? '#F6F7FB' : '#FFFFFF'} bgRepeat={"no-repeat"} pos={"relative"}>
                    {isMouseEnter &&
                        <Stack p={2} justifyContent={'start'}>
                            <Cart isLatest={true} />
                        </Stack>
                    }
                </Stack>

            </Stack>
            <Stack h="100%" display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                <Text fontSize={18} textAlign={'start'} color={'#151875'}>
                    Cantilever chair
                </Text>
                <Text fontSize={18} color={'#151875'}>
                    $42.00
                </Text>
                <Text fontSize={18} as={'del'} color={'#FB2E86'}>
                    $52.00
                </Text>
            </Stack>
        </>
    )
}
export default LatestProductCard