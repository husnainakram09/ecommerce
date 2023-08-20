import { Box, Divider, Spacer, Stack, Text } from '@chakra-ui/react'
import HaktoButton from '@ui/Button'
import Cart from '@ui/Cart'
import Image from 'next/image'
import React, { FC, useState } from 'react';
interface IProps {
    image: string;
};

const CategoriesCard: FC<IProps> = ({ image }) => {
    const [isMouseEnter, setIsMouseEnter] = useState(false)
    const handleMouseEnter = () => {
        setIsMouseEnter(true)
    }
    const handleMouseLeave = () => {
        setIsMouseEnter(false)
    }
    return (
        <Stack >
            <Stack h={280} w={280} borderRadius={'100%'} borderLeft={isMouseEnter ? '8px solid #9877E7' : ''} boxShadow={"0px 0px 25px 0px rgba(0, 0, 0, 0.1)"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} cursor={'pointer'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                <Image src={image} alt='' width={200} height={200} />
                {isMouseEnter &&
                    <Box display={'flex'} justifyContent={'center'}>
                        <HaktoButton text={"View Shop"} type='success' />
                    </Box>
                }
            </Stack>
            <Stack w={280}>
                <Text color={'#151875'} textAlign={'center'} fontWeight={'bold'} fontSize={'18px'}>Mini Law Chair</Text>
                <Text color={'#151875'} textAlign={'center'} fontWeight={'bold'} fontSize={'18px'}>45$</Text>
            </Stack>
        </Stack>
    )
}
export default CategoriesCard