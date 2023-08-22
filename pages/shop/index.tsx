import React, { FC } from "react";
import WebLayout from "@layout/index";
import HeroSection from "@ui/HeroSection";
import Product from "@components/Shop/products";
import { Container } from "@chakra-ui/react";
import Brands from "@components/Home/Brands";
interface IProps { };

const Shop: FC<IProps> = (props) => {
    const pages = ['Home .', 'Pages .', 'Shop Grid Default'];
    return (
        <>
            <WebLayout>
                <HeroSection title={'Shop Grid Default'} pages={pages} />
                <Container maxW={"80vw"}>
                    <Product />
                </Container>
                <Container maxW={"80vw"} mt={10}>
                    <Brands />
                </Container>
            </WebLayout>
        </>
    )
};

export default Shop;