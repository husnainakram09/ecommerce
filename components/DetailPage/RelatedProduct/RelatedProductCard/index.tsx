import { Box, Stack, Text } from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import Image from 'next/image'
import Review from '@ui/Review'
interface IProps {
    img: string
};

const LatestProductCard: FC<IProps> = ({ img }) => {
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
                        <Text fontSize={'15px'} mt={1} cursor={'pointer'}>Mens Fashion</Text>
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