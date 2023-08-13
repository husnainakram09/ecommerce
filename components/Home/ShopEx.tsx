import React, { FC, useEffect, useState } from "react";
import { Box, HStack, SimpleGrid, Text } from "@chakra-ui/react"
import ShopCard from "./ShopCard";

interface IProps { };

const ShopEx: FC<IProps> = (props) => {
    const Images = [
        '/Assets/delivery.svg',
        '/Assets/cashback.svg',
        '/Assets/quality.svg',
        '/Assets/hours.svg',
    ]
    return (
        <>
            <Box textAlign={"center"} mt={20}>
                <Text fontSize={"40px"} fontWeight={'700 !important'} color='secondaryBlue.100' lineHeight={"1.2"}>
                    What Shopex Offer!
                </Text>
            </Box>
            <HStack justify={"center"} mt={10}>

                {Images.map((product: any, index: any) => {
                    return (
                        <ShopCard key={index} image={product} />
                    )
                })}
            </HStack >

        </>
    );
};

export default ShopEx;