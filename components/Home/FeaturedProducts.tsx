import React from 'react'
import { Box, HStack, Text } from "@chakra-ui/react"
import ProductCard from './ProductCard'

const FeaturedProducts = () => {
    return (
        <>
            <Box textAlign={"center"}>
                <Text fontSize={"40px"} fontWeight={'700 !important'} color='secondaryBlue.100' lineHeight={"1.2"}>
                    Featured Products
                </Text>
            </Box>
            <HStack justify={"center"}>
                {[1, 1, 1, 1].map((product: any, index: any) => {
                    return (
                        <ProductCard key={index} />
                    )
                })}
            </HStack>
        </>
    )
}

export default FeaturedProducts
