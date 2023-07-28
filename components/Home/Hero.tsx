import { Box, Grid, GridItem, useTheme, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import Image from "next/image";
import { HaktoButton } from "@ui/index";

interface IProps { }

const Hero: FC<IProps> = (props) => {
    const theme = useTheme();
    const { primary, textColor } = theme.colors;

    return (
        <Grid
            h="500px"
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(24, 1fr)" // Adjusted templateColumns
            bg={primary["300"]}
            position="relative"
        >
            <GridItem rowSpan={2} colSpan={16}> {/* Adjusted colSpan */}
                <Box display="flex"  >
                    <Image src={"/Assets/lamp.png"} alt="" width={100} height={100} />
                </Box>
                <Box position="absolute" top="60%" left="35%" transform="translate(-50%, -50%)" textAlign="center">
                    <Text color="primary.100" fontSize="24px" fontWeight="bold" mb="2">
                        Best Furniture For Your Castle....
                    </Text>
                    <Text fontSize={"20px"} fontWeight={'700px !important'} color='primary.400'>
                        New Furniture Collection Trends in 2020
                    </Text>
                    <Text w={500} textAlign='start' fontSize={"14px"} color='textColor.100' mt='3' ms={{ md: '130px' }} >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis corporis quam, quidem voluptas aut tempora quia reprehenderit voluptatibus dolore quod quos,
                    </Text>
                    <Box mt={{ md: '5' }}>
                        <HaktoButton />
                    </Box>
                </Box>
            </GridItem>
            <GridItem rowSpan={2} colSpan={8} position={'relative'}> {/* Adjusted colSpan */}
                <Box position={'absolute'} top={5} right={50} w={450}>
                    <Image src={"/Assets/blob.png"} alt="" width={100} height={100} />
                </Box>
                <Box position={'absolute'} top={2} right={0} w={150}>
                    <Image src={"/Assets/blobDiscount.png"} alt="" width={100} height={100} />
                </Box>
                <Box position={'absolute'} top={50} right={63} >
                    <Text color={'white'} fontSize={'18px'} fontWeight={700}> 50 % </Text>
                    <Text color={'white'} textAlign={'center'} fontSize={'18px'}>off</Text>

                </Box>
                <Box position={'absolute'} top={10} right={100} w={400}>
                    <Image src={"/Assets/chair.png"} alt="" width={100} height={100} />
                </Box>
            </GridItem>
        </Grid>
    );
};

export default Hero;
