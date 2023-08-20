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
            gridTemplateColumns="repeat(4, 1fr)" // Adjusted templateColumns
            bg={primary["300"]}
            h={{ lg: "100%", md: '100%', base: "50%" }}
        >
            <GridItem display={{ base: "none", md: "flex", lg: 'flex' }} justifyContent={'start'}> {/* Adjusted colSpan */}
                <Box>
                    <Image src="/Assets/lamp.png" alt="" width={400} height={400} />
                </Box>

            </GridItem>

            <GridItem display={"flex"} alignItems={'center'} justifyContent={'start'} >
                <Box w={{ lg: "600px", base: "350px", md: '500px' }} justifyContent={'center'} alignItems={'center'} p={5}>
                    <Text color="primary.100" fontSize="24px" fontWeight="bold">
                        Best Furniture For Your Castle....
                    </Text>
                    <Text fontSize={{ base: '25px', lg: "40px" }} fontWeight="700" color="primary.400" lineHeight={{ lg: "1.2" }}>
                        New Furniture Collection Trends in 2020
                    </Text>
                    <Text fontSize="14px" color="textColor.100">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis corporis quam, quidem voluptas aut tempora quia reprehenderit voluptatibus dolore quod quos,
                    </Text>
                    <Box mt={{ base: 5 }}>
                        <HaktoButton text="Shop Now" size="lg" button={{ p: "0 40px" }} />
                    </Box>
                </Box>
            </GridItem>

            <GridItem colSpan={2} display={{ base: 'none', md: 'flex', lg: 'flex' }} alignItems={'center'} justifyContent={'center'}> {/* Adjusted colSpan */}
                <Image src="/Assets/sofa_promotion.png" alt="" width={500} height={500} />
            </GridItem>
        </Grid >
    );
};

export default Hero;
