import React, { FC } from "react";
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
interface IProps {
    title: string;
    pages: string[];
};

const HeroSection: FC<IProps> = ({ title, pages }) => {
    return (
        <>
            <Grid templateColumns='repeat(1, 1fr)'>
                <GridItem w='100%' h='200' bg='#F6F5FF' display={'block'} justifyContent={'center'} alignItems={'center'}>
                    <Box pt={20} pl={{ base: 10, md: 24, lg: 24 }}>
                        <Text fontSize={'36px'} fontWeight={'600'} color={'#101750'}>
                            {title}
                        </Text>
                    </Box>
                    <Box display={'flex'} pl={{ base: 10, md: 24, lg: 24 }} gap={2}>

                        {pages?.map((page, index) => (
                            <Text key={index} fontSize={'16px'} fontWeight={'700'} color={index == 2 ? '#FB2E86' : "#000000"}>
                                {page}
                            </Text>
                        ))}
                    </Box>
                </GridItem>
            </Grid>
        </>
    )
};

export default HeroSection;