import React, { FC, useState } from "react";
import { Box, Divider, Flex, HStack, Spacer, Stack, Text } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Icon, createIcon } from '@chakra-ui/react'
import Image from "next/image";
import Review from "@ui/Review";
import Cart from "@ui/Cart";
import HaktoButton from "@ui/Button";
interface IProps {
    img?: any
};

const DetailPageCard: FC<IProps> = ({ img }) => {
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
    const Images = [
        '/Assets/Detail/Detail.png',
        '/Assets/Detail/DetailOne.png',
        '/Assets/Detail/DetailTwo.png',

    ]
    return (
        <HStack boxShadow={"0px 0px 25px 0px rgba(0, 0, 0, 0.1)"} w={'100%'} display={'flex'} alignItems={'center'} justifyContent={'start'} mt={20}>
            <Stack
                direction={{ base: 'column', sm: 'column', md: 'column' }}
                display={'flex'}
                borderRadius={10}
            >
                {Images.map((img: any, index: any) => (
                    <Box key={index} p={2}>
                        <Image src={img} alt='Picture of the author' width={100} height={100} />
                    </Box>
                ))}
            </Stack>
            <Stack m={0} p={0} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Image src={'/Assets/Detail/DetailThree.png'} alt='Picture of the author' width={270} height={270} />
            </Stack>
            <Stack display={'flex'} ms={10} >
                <Box display={'flex'} gap={2}>
                    <Text fontSize={18} textAlign={'start'} color={'#151875'} cursor={'pointer'}>
                        Cantilever chair
                    </Text>

                </Box>
                <Box>
                    <Review /> (500)
                </Box>
                <Box display={'flex'} gap={2}>
                    <Text fontSize={18} color={'#151875'}>
                        $42.00
                    </Text>
                    <Text fontSize={18} as={'del'} color={'#FB2E86'}>
                        $52.00
                    </Text>
                </Box>
                <Box>
                    <CircleIcon boxSize={3} color='#DE9034' />
                    <CircleIcon boxSize={3} color='#EC42A2' />
                    <CircleIcon boxSize={3} color='#8568FF' />
                </Box>
                <Box>
                    <Text color={'lightgray'} w={80}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Text>
                </Box>
                <Box>
                    <HaktoButton text={'Add To Cart'} />
                </Box>
            </Stack>
        </HStack>




    )
};

export default DetailPageCard;