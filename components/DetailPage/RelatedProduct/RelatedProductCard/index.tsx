import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Spacer, Stack, Text } from '@chakra-ui/react'
import HaktoButton from '@ui/Button'
import Cart from '@ui/Cart'
import React, { FC, useState } from 'react'
import Image from 'next/image'
import Review from '@ui/Review'
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
        <Box maxW='100%'>
            <>
                <Stack>
                    <Image
                        src={img}
                        alt='Green double couch with wooden legs'
                        width={200}
                        height={200}
                    />
                </Stack>
                <Stack display={'flex'} flexDirection={'row'}>
                    <Box >
                        <Text fontSize={'15px'} mt={1} cursor={'pointer'}>Men's Fashion</Text>
                        <Text>58$</Text>
                    </Box>
                    <Box>
                        <Review />
                    </Box>
                </Stack>
            </>
        </Box>
    )
}
export default LatestProductCard