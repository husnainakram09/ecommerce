import { Box, Flex, Icon, Select, SimpleGrid, Text, useTheme, Grid, GridItem } from "@chakra-ui/react";
import user from '../../public/Assets/user.svg';
import cart from '../../public/Assets/cart.svg';
import wishList from '../../public/Assets/wishList.svg';


import Image from "next/image";
const TopNav = (props: any) => {
    const theme = useTheme();
    const { primary, secondaryBlue, purple } = theme.colors;
    return (
        <>

            <Grid templateColumns='repeat(2, 1fr)' gap={6} color='white' bg={'purple.100'}>
                <GridItem w='100%' h='10' display={'flex'} justifyContent={'center'} alignItems={'center'} gap={10}>
                    <>
                        <Text>ZHSTORE@GMAIL.COM</Text>
                        <Text>11223344</Text>
                    </>
                </GridItem>
                <GridItem w='100%' h='10' display={'flex'} alignItems={'center'} justifyContent={'start'} gap={10}>
                    <>
                        <Box display={'flex'} alignItems={'flex-start'} justifyContent={'center'}>
                            <Text>LOGIN</Text>
                            <Image src={user} alt="" />
                        </Box>
                        <Box display={'flex'} alignItems={'flex-start'} justifyContent={'center'}>
                            <Text>wishList</Text>
                            <Image src={wishList} alt="" />
                        </Box>
                        <Box display={'flex'} alignItems={'flex-start'} justifyContent={'center'}>
                            <Image src={cart} alt="" />
                        </Box>
                    </>
                </GridItem>

            </Grid>
        </>
    );
};

export default TopNav;
