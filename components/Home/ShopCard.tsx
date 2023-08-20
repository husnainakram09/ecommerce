import { Box, Divider, Spacer, Stack, Text } from '@chakra-ui/react'
import HaktoButton from '@ui/Button'
import Cart from '@ui/Cart'
import Image from 'next/image'
import React, { FC, useState } from 'react';
interface IProps {
    image: string;
};

const ShopCard: FC<IProps> = ({ image }) => {
    const [isMouseEnter, setIsMouseEnter] = useState(false)
    const handleMouseEnter = () => {
        setIsMouseEnter(true)
    }
    const handleMouseLeave = () => {
        setIsMouseEnter(false)
    }
    return (
        <>
            <Stack  m={2} borderRadius={10} boxShadow={"0px 0px 25px 0px rgba(0, 0, 0, 0.1)"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} cursor={'pointer'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={5}>
                <Image src={image} alt='' width={50} height={50} />
                <Text color={'#151875'} fontSize={"22px"} fontWeight={'500 !important'}>24/7 Support</Text>
                <Text textAlign={'center'} color={'gray'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</Text>
            </Stack>
        </>
    )
}
export default ShopCard