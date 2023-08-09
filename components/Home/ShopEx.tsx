import React, { FC, useEffect, useState } from "react";
import { Box, HStack, SimpleGrid, Text } from "@chakra-ui/react"
import ShopCard from "./ShopCard";

interface IProps { };

const ShopEx: FC<IProps> = (props) => {
    return (
        <>
            <Box textAlign={"center"} mt={20}>
                <Text fontSize={"40px"} fontWeight={'700 !important'} color='secondaryBlue.100' lineHeight={"1.2"}>
                    What Shopex Offer!
                </Text>
            </Box>
            <HStack justify={"center"}>
                {/* <AliceCarousel
                    responsive={responsive}
                    controlsStrategy="alternate"
                > */}
                {[1].map((product: any, index: any) => {
                    return (
                        <ShopCard key={index} />
                    )
                })}
                {/* </AliceCarousel > */}
            </HStack >

        </>
    );
};

export default ShopEx;