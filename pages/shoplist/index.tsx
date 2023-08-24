import React, { FC } from "react";
import HeroSection from "@ui/HeroSection";
import { Container } from "@chakra-ui/react";
import WebLayout from "@layout/index";
import Brands from "@components/Home/Brands";
import ProductList from "@components/ShopList";
interface IProps { };

const ShopList: FC<IProps> = (props) => {
    const pages = ['Home .', 'Pages .', 'Shop List'];
    return (
        <>
            <WebLayout>
                <HeroSection title={'Shop Grid Default'} pages={pages} />
                <Container maxW={"80vw"} >
                    <ProductList />
                </Container>
                <Container maxW={"80vw"} mt={10}>
                    <Brands />
                </Container>
            </WebLayout>
        </>
    );
};

export default ShopList;