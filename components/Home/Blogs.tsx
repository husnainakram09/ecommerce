import React, { FC } from "react";
import { Box, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import BlogCardImage from "./BlogsCard";

interface IProps { };

const Blogs: FC<IProps> = (props) => {
    const images = [

        '/Assets/blog.png',
        '/Assets/blogTwo.png',
        '/Assets/blogThree.png',
    ]
    return (
        <>
            <Box textAlign={"center"} mt={20}>
                <Text fontSize={"40px"} fontWeight={'700 !important'} color='secondaryBlue.100' lineHeight={"1.2"}>
                    Leatest Blog
                </Text>
            </Box>
            <SimpleGrid columns={{ sm: 1, md: 3 }} justifyItems={'center'}>
                {images.map((product: any, index: any) => {
                    return (
                        <BlogCardImage img={product}/>
                    )
                })}
            </SimpleGrid>
        </>
    );
};

export default Blogs;