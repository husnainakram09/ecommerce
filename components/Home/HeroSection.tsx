import { Box, Grid, GridItem, useTheme, Text, Stack } from "@chakra-ui/react";
import React, { FC } from "react";
import Image from "next/image";
import { HaktoButton } from "@ui/index";

interface IProps { }

const Hero: FC<IProps> = (props) => {
    const theme = useTheme();
    const { primary, textColor } = theme.colors;

    return (
        <Grid
            h="83%"
            gridTemplateColumns="repeat(2, 1fr)" // Adjusted templateColumns
            bg={primary["300"]}
            position="relative"
        >
            <GridItem bgImage={"/Assets/lamp.png"} bgSize={"40%"} bgRepeat={"no-repeat"} bgPos={"10% 0"}>
                <Stack h={"100%"} alignItems={"flex-end"} justify={"center"} mr={"-10%"}>
                    <Box w="500px">
                        <Text color="primary.100" fontSize="24px" fontWeight="bold" mb="2">
                            Best Furniture For Your Castle....
                        </Text>
                        <Text fontSize={"40px"} fontWeight={'700 !important'} color='primary.400' lineHeight={"1.2"}>
                            New Furniture Collection Trends in 2020
                        </Text>
                        <Text fontSize={"14px"} color='textColor.100'  >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis corporis quam, quidem voluptas aut tempora quia reprehenderit voluptatibus dolore quod quos,
                        </Text>
                        <Box>
                            <HaktoButton text={"Shop Now"} />
                        </Box>
                    </Box>
                </Stack>
            </GridItem>
            <GridItem bgImage={"/Assets/sofa_promotion.png"} bgSize={"70%"} bgRepeat={"no-repeat"} bgPos={"center"}> {/* Adjusted colSpan */}
            </GridItem>
        </Grid>
    );
};

export default Hero;
