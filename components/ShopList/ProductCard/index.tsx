import React, { FC, useState } from "react";
import { Box, Divider, Spacer, Stack, Text } from '@chakra-ui/react'
import Image from "next/image";
import HaktoButton from '@ui/Button'
import Cart from '@ui/Cart'
import { Icon } from '@chakra-ui/react'
import { StarIcon } from "@chakra-ui/icons";
import Review from "@ui/Review";
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
        <>
            <Stack direction={{ base: 'column', sm: 'row' }} display={'flex'} alignItems={'center'} h={{base:360,md:260,lg:260}} w={'100%'} m={2} borderRadius={10} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                <Stack cursor={'pointer'}>
                    <Image src={img} alt="Product" width={280} height={280} />
                </Stack>
                <Stack display={'flex'} ms={10} >
                    <Box display={'flex'} gap={2}>
                        <Text fontSize={18} textAlign={'start'} color={'#151875'} cursor={'pointer'}>
                            Cantilever chair
                        </Text>
                        <Box gap={4}>
                            <CircleIcon boxSize={3} color='#DE9034' />
                            <CircleIcon boxSize={3} color='#EC42A2' />
                            <CircleIcon boxSize={3} color='#8568FF' />
                        </Box>
                    </Box>
                    <Box display={'flex'} gap={2}>
                        <Text fontSize={18} color={'#151875'}>
                            $42.00
                        </Text>
                        <Text fontSize={18} as={'del'} color={'#FB2E86'}>
                            $52.00
                        </Text>
                        <Box>
                            <Review />
                        </Box>
                    </Box>
                    <Box>
                        <Text color={'lightgray'} w={80}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Text>
                    </Box>
                    <Box>
                        <Cart />
                    </Box>

                </Stack>
            </Stack>
        </>
    )
};

export default ProductCard;