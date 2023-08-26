import React, { FC } from "react";
import DetailPageCard from "./DetailPageCard";
import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import RelatedProductCard from "./RelatedProduct/RelatedProductCard";
import { BiBox } from "react-icons/bi";
interface IProps { };

const DetailProductInfo: FC<IProps> = (props) => {
    const Images = [
        '/Assets/Related/RelatedOne.png',
        '/Assets/Related/RelatedTwo.png',
        '/Assets/Related/RelatedThree.png',
        '/Assets/Related/RelatedFour.png',
    ]
    return (
        <>
            <Container maxW={'60vw'}>
                <DetailPageCard />
            </Container>
            <Container maxW={'60vw'}>
                <>
                    <Box mt={20} ms={2}>
                        <Text fontSize={'30px'} color={'#101750'}>Related Products</Text>
                    </Box>
                    <SimpleGrid columns={{ sm: 1, md: 4, lg: 4 }} gap={2} justifyItems={'center'} mt={10}>

                        {
                            Images.map((img, index) => {
                                return (
                                    <div key={index} >
                                        <RelatedProductCard img={img} />
                                    </div>
                                )
                            })
                        }
                    </SimpleGrid>
                </>
            </Container>
        </>
    )
};

export default DetailProductInfo;