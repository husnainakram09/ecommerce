import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import Image from "next/image";
import HaktoButton from "@ui/Button";
interface IProps { };

const DiscountItemCard: FC<IProps> = (props) => {
    return (
        <>
            <Flex>
                <Center>
                    <Box ms={100}>
                        <Box >
                            <Text fontSize={"30px"} fontWeight={'700 !important'} color='#151875' lineHeight={"1.2"}>
                                20% Discount Of All Products
                            </Text>
                            <Text fontSize={"14px"} color='#FB2E86'>
                                Eams Sofa Compact
                            </Text>
                            <Text fontSize={"14px"} color='#B7BACB' w={'500px'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Eu eget feugiat habitasse nec, bibendum condimentum.
                            </Text>
                        </Box>
                        <Box display={'flex'} gap={10} mt={5}>
                            <Text fontSize={"14px"} color='#B7BACB'>
                                Material expose like metals
                            </Text>
                            <Text fontSize={"14px"} color='#B7BACB'>
                                Clear lines and geomatric figures
                            </Text>

                        </Box>
                        <Box display={'flex'} gap={10}>
                            <Text fontSize={"14px"} color='#B7BACB'>
                                Simple neutral likes colours.
                            </Text>
                            <Text fontSize={"14px"} color='#B7BACB'>
                                Material expose like metals
                            </Text>

                        </Box>
                        <Box mt={5}>
                            <HaktoButton text={'Shop Now'} />
                        </Box>
                    </Box>
                </Center>
                <Box flex="1" ms={100}>
                    <Image src={'/Assets/sofaChair.png'} alt="" width={'700'} height={'700'} />
                </Box>
            </Flex>
        </>
    )
};

export default DiscountItemCard;