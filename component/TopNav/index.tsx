import { Box, Flex, Icon, Select, SimpleGrid, Text, Image } from "@chakra-ui/react";
import user from '../../public/Assets/user.svg'
import {BsPerson} from 'react-icons/bs'
const TopNav = (props: any) => {
    return (
        <>
            <SimpleGrid columns={8} spacing={10} bg='gray'>
                {/* First Column */}
                <Box gridColumn="span 2" height="50px" display="flex" alignItems="center" justifyContent="end">
                    <Text color='white'>zainbinshakoor</Text>
                </Box>
                <Box gridColumn="span 1" height="50px" display="flex" alignItems="center" justifyContent="start">
                    <Text color='white'>03117406944</Text>

                </Box>

                {/* Second Column */}
                <Box gridColumn="span 2" height="50px" display="flex" alignItems="center" justifyContent="space-between" >
                    <Select placeholder='English' variant='unstyled' width='85px' color='white'>
                        <option value='URDU'>URDU</option>
                    </Select>
                    <Select placeholder='USD' variant='unstyled' width='65px' color='white'>
                        <option value='PKR'>PKR</option>
                    </Select>
                    <Text color='white'>Login </Text>
                    <Text color='white'>WishList</Text>
                    <Text color='white'>Cart</Text>


                </Box>


                {/* Third Column */}

            </SimpleGrid>
        </>
    );
};

export default TopNav;
