import React from 'react'
import { Box, HStack, SimpleGrid, Text } from "@chakra-ui/react"
import ProductCard from './ProductCard'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const FeaturedProducts = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    return (
        <>
            <Box textAlign={"center"} mt={20}>
                <Text fontSize={"40px"} fontWeight={'700 !important'} color='secondaryBlue.100' lineHeight={"1.2"}>
                    Featured Products
                </Text>
            </Box>
            <SimpleGrid columns={{ sm: 1, md: 3 }} justifyContent={"center"}>
                {/* <AliceCarousel
                    responsive={responsive}
                    controlsStrategy="alternate"
                > */}
                {[1, 1, 1].map((product: any, index: any) => {
                    return (
                        <ProductCard key={index} />
                    )
                })}
                {/* </AliceCarousel > */}
            </SimpleGrid >
        </>
    )
}
export default FeaturedProducts
