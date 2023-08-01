import React from 'react'
import { Box, HStack, Text } from "@chakra-ui/react"
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
            <Box textAlign={"center"}>
                <Text fontSize={"40px"} fontWeight={'700 !important'} color='secondaryBlue.100' lineHeight={"1.2"}>
                    Featured Products
                </Text>
            </Box>
            <HStack justify={"center"}>
                <AliceCarousel
                    responsive={responsive}
                    controlsStrategy="alternate"
                >
                    {[1, 1, 1, 1, 1, 1, 1, 1].map((product: any, index: any) => {
                        return (
                                <ProductCard key={index} />
                        )
                    })}
                </AliceCarousel >
            </HStack >
        </>
    )
}

export default FeaturedProducts
