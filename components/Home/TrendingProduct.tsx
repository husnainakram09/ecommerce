import React, { FC, useEffect, useState } from "react";
import { Box, Flex, HStack, SimpleGrid, Text } from "@chakra-ui/react"
import TrendingProductCard from "./TrendingProductCard";
import Image from "next/image";
interface IProps { };

const ShopEx: FC<IProps> = (props) => {
    const Images = [
        '/Assets/trending1.png',
        '/Assets/trending2.png',
        '/Assets/trending3.png',
        '/Assets/trending4.png',
    ]
    const Discount = [
        '/Assets/discount.png',
        '/Assets/discount2.png',
        '/Assets/discount3.png',
    ]
    return (
        <>
            <Box textAlign={"center"} mt={20}>
                <Text fontSize={"40px"} fontWeight={'700 !important'} color='secondaryBlue.100' lineHeight={"1.2"}>
                    Trending Products
                </Text>
            </Box>
            <HStack justify={"center"} mt={10}>
                {Images.map((product: any, index: any) => {
                    return (
                        <TrendingProductCard key={index} image={product} />
                    )
                })}
            </HStack >
            <Flex display={'flex'} justify={'space-evenly'} gap={5} mt={5}>
                <Box bgColor={'#FFF6FB'} h='220px' w={'30%'} p={5} borderRadius={10}>
                    <Text fontSize={"20px"} color={'#151875'}>23% off in all products</Text>
                    <Text fontSize={"20px"} color={'#FB2E86'} as={'ins'}>Shop Now</Text>
                    <Box display={'flex'} justifyContent={'end'}>
                        <Image src={'/Assets/clock.png'} alt="" width={150} height={150} />
                    </Box>

                </Box>
                <Box bgColor={'#EEEFFB'} h='220px' w={'30%'} p={5} borderRadius={10}>
                    <Text fontSize={"20px"} color={'#151875'}>23% off in all products</Text>
                    <Text fontSize={"20px"} color={'#FB2E86'} as={'ins'}>View Collection</Text>
                    <Box display={'flex'} justifyContent={'end'}>
                        <Image src={'/Assets/drawer.png'} alt="" width={200} height={200} />
                    </Box>

                </Box>
                <Box h='220px' w={'30%'}  borderRadius={10}>
                    {
                        Discount.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Box display={'flex'} mt={1}>
                                        <Box bgColor={'#F5F6F8'} p={2} borderRadius={9}>
                                            <Image src={item} alt="" width={50} height={50} />
                                        </Box>
                                        <Box ms={3}>
                                            <Text fontSize={"16px"} color={'#151875'}>Executive Seat chair</Text>
                                            <Text fontSize={"16px"} color={'#151875'} as={'del'}>50$</Text>
                                        </Box>
                                    </Box>
                                </div>
                            )
                        })
                    }

                </Box>
            </Flex>

        </>
    );
};

export default ShopEx;