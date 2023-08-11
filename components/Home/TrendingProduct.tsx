import React, { FC, useEffect, useState } from "react";
import { Box, HStack, SimpleGrid, Text } from "@chakra-ui/react"
import TrendingProductCard from "./TrendingProductCard";
interface IProps { };

const ShopEx: FC<IProps> = (props) => {
    const Images = [
        '/Assets/trending1.png',
        '/Assets/trending2.png',
        '/Assets/trending3.png',
        '/Assets/trending4.png',
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
                        <TrendingProductCard key={index} image={product}/>
                    )
                })}
            </HStack >

        </>
    );
};

export default ShopEx;