import { Box, Flex, Icon, Select, SimpleGrid, Text, useTheme, Grid, GridItem } from "@chakra-ui/react";
import user from '../../public/Assets/user.svg';
import cart from '../../public/Assets/cart.svg';
import wishList from '../../public/Assets/wishList.svg';
import email from '../../public/Assets/email.svg';
import phone from '../../public/Assets/phone.svg';

import Image from "next/image";
const TopNav = (props: any) => {
    const theme = useTheme();
    const { primary, secondaryBlue, purple } = theme.colors;
    return (
        <>

            <Grid templateColumns='repeat(2, 1fr)' gap={6} color='white' bg={'purple.100'} display={{base:'none', md:'flex'}}>
                <GridItem w='100%' h='10' display={'flex'} justifyContent={'center'} alignItems={'center'} gap={10}>
                    <>
                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={1} cursor={'pointer'} >
                            <Image src={email} alt="" />
                            <Text>zainbinshakoor</Text>
                        </Box>
                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={1} cursor={'pointer'}>
                            <Image src={phone} alt="" />
                            <Text>3117406944</Text>
                        </Box>
                    </>
                </GridItem>
                <GridItem w='100%' h='10' display={'flex'} alignItems={'center'} justifyContent={'start'} gap={3} marginLeft={{md:'90px'}}>
                    <>
                        <Box display={'flex'} alignItems={'flex-start'} justifyContent={'center'} gap={1} cursor={'pointer'}>
                            <Text>Login</Text>
                            <Image src={user} alt="" />
                        </Box>
                        <Box display={'flex'} alignItems={'inherit'} justifyContent={'center'} gap={1} cursor={'pointer'}>
                            <Text>wishList</Text>
                            <Image src={wishList} alt="" />
                        </Box>
                        <Box display={'flex'} alignItems={'flex-start'} justifyContent={'center'} gap={10} cursor={'pointer'}>
                            <Image src={cart} alt="" />
                        </Box>
                    </>
                </GridItem>

            </Grid>
        </>
    );
};

export default TopNav;
