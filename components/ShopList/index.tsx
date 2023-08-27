import { Box, Grid, GridItem, Input, Select, SimpleGrid, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import ProductCard from "./ProductCard";
interface IProps { };

const ProductList: FC<IProps> = (props) => {
    const Images = [
        '/Assets/shopList/ShopList.png',
        '/Assets/shopList/ShopListOne.png',
        '/Assets/shopList/ShopListTwo.png',
        '/Assets/shopList/ShopListThree.png',
        '/Assets/shopList/ShopListFour.png',
        '/Assets/shopList/ShopListFive.png',
        '/Assets/shopList/ShopListSix.png',
    ]
    return (
        <>
            {/* <Grid templateColumns='repeat(2, 1fr)' mt={20}>
                <GridItem w='100%' h='200'  >
                    <Box ms={30}>
                        <Text fontSize={"22px"} fontWeight={'700 !important'} color='secondaryBlue.100' lineHeight={"1.2"}>
                            Ecommerce Acceories & Fashion item
                        </Text>
                        <Text fontSize={"12px"} fontWeight={'400 !important'} color='lightgray' lineHeight={"1.2"}>
                            About 9,620 results (0.62 seconds)
                        </Text>
                    </Box>
                </GridItem>
                <GridItem w='100%' h='10' display={{ base: 'none', md: 'flex', lg: 'flex' }} gap={8}>
                    <Box display={'flex'} alignItems={'center'} gap={2}>
                        <Text>Per Page:</Text>
                        <Input w={16} max={20} min={10} />
                    </Box>
                    <Box display={'flex'} alignItems={'center'} gap={2}>
                        <Text>Sort By:</Text>
                        <Select placeholder='Best Match' w={36}>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </Box>
                </GridItem>

            </Grid> */}
            <SimpleGrid columns={{ sm: 1, md: 1, lg: 1 }} justifyContent={'center'}>
                {Images.map((img: any, index: any) => {
                    return (
                        <div
                            key={index}
                        >
                            <ProductCard key={index} img={img} />
                        </div>
                    )
                })}
            </SimpleGrid>
        </>
    )
};

export default ProductList;