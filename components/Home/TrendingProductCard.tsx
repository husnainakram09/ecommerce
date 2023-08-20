import { Box, Divider, Spacer, Stack, Text } from '@chakra-ui/react'
import HaktoButton from '@ui/Button'
import Cart from '@ui/Cart'
import Image from 'next/image'
import React, { FC } from 'react'
interface IProps {
    image: any
};

const TrendingProductCard: FC<IProps> = ({ image }) => {
    return (
        <>
            <Stack borderRadius={10} boxShadow={"0px 0px 25px 0px rgba(0, 0, 0, 0.1)"} cursor={'pointer'} p={3}>

                <Stack h={'100%'} bgColor={'#F6F7FB'} >
                    <Image src={image} alt='Img' width={500} height={500} />
                </Stack>
                <Box textAlign={"center"} transition={'.3s ease'} bgColor={"transparent"} p={1}>
                    <Text fontSize={24} color={'#151875'}>
                        Cantilever chair
                    </Text>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2}>
                        <Text fontSize={18} color={'#151875'}>
                            $42.00
                        </Text>
                        <Text fontSize={18} color={'lightgray'} as={'del'} mt={-1}>
                            $42.00
                        </Text>
                    </Box>

                </Box>
            </Stack>
        </>
    )
}
export default TrendingProductCard