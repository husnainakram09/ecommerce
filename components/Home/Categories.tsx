import React, { FC, useEffect, useState } from "react";
import { Box, HStack, SimpleGrid, Text } from "@chakra-ui/react"
import CategoriesCard from "@components/Home/CategoriesCard";
interface IProps { };

const Categories: FC<IProps> = (props) => {
    const Images = [
        '/Assets/trendOne.png',
        '/Assets/trendTwo.png',
        '/Assets/trendThree.png',
    ]
    return (
        <>
            <Box textAlign={"center"} mt={20}>
                <Text fontSize={"40px"} fontWeight={'700 !important'} color='secondaryBlue.100' lineHeight={"1.2"}>
                    Top Categories
                </Text>
            </Box>
            <SimpleGrid columns={{ sm: 1, md: 3, lg: 3 }} mt={10}>
                {Images.map((product: any, index: any) => {
                    return (
                        <CategoriesCard key={index} image={product} />
                    )
                })}
            </SimpleGrid >

        </>
    );
};

export default Categories;