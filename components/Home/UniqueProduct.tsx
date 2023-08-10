import { Box, Grid, GridItem, useTheme, Text, Stack, UnorderedList, ListItem } from "@chakra-ui/react";
import React, { FC } from "react";
import Image from "next/image";
import { HaktoButton } from "@ui/index";

interface IProps { }

const UniqueProduct: FC<IProps> = (props) => {
    const theme = useTheme();
    const { primary, textColor } = theme.colors;
    const frameFeatures = [
        'All frames constructed with hardwood solids and laminates',
        'Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails',
        'Arms, backs and seats are structurally reinforced',
    ];
    return (
        <Grid
            h="50%"
            gridTemplateColumns="repeat(2, 1fr)" // Adjusted templateColumns
            bg={primary["300"]}
            position="relative"
            mt={20}
        >
            <GridItem bgImage={"/Assets/trend.png"} bgSize={"50%"} bgRepeat={"no-repeat"} bgPos={"center"}> {/* Adjusted colSpan */}
            </GridItem>
            <GridItem >
                <Stack h={"100%"} alignItems={"flex-start"} justify={"center"} >
                    <Box w="500px">

                        <Text fontSize={"40px"} fontWeight={'700 !important'} color='#151875' lineHeight={"1.2"}>
                            Unique Features Of leatest &
                            Trending Poducts
                        </Text>
                        <UnorderedList color={'#ACABC3'} >
                            {frameFeatures?.map((feature, index) => (
                                <ListItem key={index} p={3}>
                                    {feature}
                                </ListItem>
                            ))}
                        </UnorderedList>
                        <Box display={'flex'} mt={5}>
                            <HaktoButton text={"Add To Cart"} size="lg" button={{ p: "0 40px" }} />
                            <Box ms={5}>
                                <Text color={'#151875'}>B&B Italian Sofa</Text>
                                <Text color={'#151875'} >58$</Text>
                            </Box>
                        </Box>
                    </Box>
                </Stack>
            </GridItem>

        </Grid>
    );
};

export default UniqueProduct;
