import React, { FC, useState } from "react";
import { Box, Grid, GridItem, Input, Select, SimpleGrid, Text } from "@chakra-ui/react";
import ProductCard from "./productCard/ProductCard";
import Image from 'next/image'
import ProductList from "@components/ShopList";
interface IProps { };

const Product: FC<IProps> = (props) => {
    const [itemsAlign, setItemsAlign] = useState('Grid')

    const Images = [
        '/Assets/shop/product1.png',
        '/Assets/shop/product2.png',
        '/Assets/shop/product3.png',
        '/Assets/shop/product4.png',
        '/Assets/shop/product5.png',
        '/Assets/shop/product6.png',
        '/Assets/shop/product7.png',
        '/Assets/shop/product8.png',
        '/Assets/shop/product9.png',
        '/Assets/shop/product10.png',
        '/Assets/shop/product11.png',
        '/Assets/shop/product12.png',

    ]
    return (
        <>
            <Grid templateColumns='repeat(2, 1fr)' mt={20}>
                <GridItem w='100%' h='100'  >
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
                    <Box display={'flex'} alignItems={'center'} gap={2}>
                        <Text>view:</Text>
                        <Box onClick={() => setItemsAlign('Grid')} cursor={'pointer'}>
                            <Image src='/Assets/grid.svg' alt="Grid" width={20} height={20} />
                        </Box>
                        <Box onClick={() => setItemsAlign('List')} cursor={'pointer'}>
                            <Image src='/Assets/list.svg' alt="List" width={20} height={20} />
                        </Box>

                    </Box>
                </GridItem>

            </Grid>
            {itemsAlign === 'Grid' ? <SimpleGrid columns={{ sm: 1, md: 4, lg: 4 }} justifyItems={'center'} gridColumnGap={20} gap={10}>
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
                :
                <ProductList />
            }
        </>

    );
};

export default Product;