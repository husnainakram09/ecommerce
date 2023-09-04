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
        <>
            <Stack h={240} w={200} borderRadius={'100%'} gap={0}
            >
                <Stack
                    // h={"100%"}
                    height={"100%"}
                    width={'100%'}
                    align={'flex-start'}
                    justify={"space-between"}
                    borderRadius={"100%"}
                    bgImage={image}
                    bgSize={isMouseEnter ? "50%" : "center"}
                    bgPos={"center"}
                    bgColor={'#F6F7FB'}
                    bgRepeat={"no-repeat"}
                    pos={"relative"}
                    borderLeft={isMouseEnter ? '6px solid #9877E7' : ''}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    cursor={'pointer'}
                >
                    {isMouseEnter &&
                        <Box display={'flex'} justifyContent={'center'} w={'100%'} pos={'absolute'} bottom={3}>
                            <HaktoButton text={"View Shop"} type='success' size={'sm'} />
                        </Box>
                    }

                </Stack>
                <Stack w={200} gap={0}>
                    <Text color={'#151875'} textAlign={'center'} fontWeight={'bold'} fontSize={'14px'}>Mini Law Chair</Text>
                    <Text color={'#151875'} textAlign={'center'} fontWeight={'bold'} fontSize={'14px'}>45$</Text>
                </Stack>
            </Stack>
        </>

    )
}
export default CategoriesCard