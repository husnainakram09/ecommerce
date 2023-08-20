import { Box, Center, Flex, Grid, GridItem, HStack, ListItem, Stack, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import Image from "next/image";
import HaktoButton from "@ui/Button";
interface IProps { };

const DiscountItemCard: FC<IProps> = (props) => {
    return (
        <Grid
            gridTemplateColumns={{ lg: "repeat(2, 1fr)", md: "repeat(2, 1fr)", sm: "repeat(1, 1fr)" }} // Adjusted templateColumns
            h={{ lg: "100%", md: '100%', base: "20%" }}
        >
            <GridItem >
                <GridItem display={'grid'} flexDirection={'column'} alignItems={'start'} justifyContent={'start'}
                >

                    <Stack >
                        <Text fontSize={"30px"} fontWeight={'700 !important'} color='#151875' lineHeight={"1.2"}>
                            20% Discount Of All Products
                        </Text>
                        <Text fontSize={"14px"} color='#FB2E86'>
                            Eams Sofa Compact
                        </Text>
                        <Text fontSize={"14px"} color='#B7BACB' w={{ base: '300px', md: '500px', lg: '500px' }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste velit officia, totam vitae quod labore quasi. Eius explicabo, quisquam voluptates eligendi cum aliquam dignissimos libero tenetur similique repellat, optio repellendus.
                        </Text>
                    </Stack>

                </GridItem>
                <Grid
                    templateColumns="repeat(2, 1fr)" // Two columns per row
                    gap="1rem"
                    mt={{ base: 10, md: 5, lg: 5 }}

                >
                    <GridItem >
                        <Text color='#B7BACB'>Lorem ipsum dolor sit amet,</Text>
                    </GridItem>
                    <GridItem>
                        <Text color='#B7BACB'>Lorem ipsum dolor sit amet,</Text>
                    </GridItem>
                    <GridItem>
                        <Text color='#B7BACB'>Lorem ipsum dolor sit amet,</Text>
                    </GridItem>
                    <GridItem>
                        <Text color='#B7BACB'>Lorem ipsum dolor sit amet,</Text>
                    </GridItem>
                    <GridItem mt={{ base: 5, md: 0, lg: 0 }}>
                        <HaktoButton text={'Shop Now'} />
                    </GridItem>
                </Grid>
            </GridItem>
            <GridItem display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Image src={'/Assets/sofaChair.png'} alt="" width={500} height={500} />
            </GridItem>

        </Grid>
    )
};

export default DiscountItemCard;