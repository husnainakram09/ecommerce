import React, { FC } from "react";
import HeroSection from "@ui/HeroSection";
import { Container } from "@chakra-ui/react";
import WebLayout from "@layout/index";
import Brands from "@components/Home/Brands";
import DetailProductInfo from "@components/DetailPage/DetailPage";
interface IProps { };

const ShopList: FC<IProps> = (props) => {
    const pages = ['Home .', 'Pages .', 'Detail Page'];
    return (
        <>
            <WebLayout>
                <HeroSection title={'Shop Grid Default'} pages={pages} />
                <Container maxW={"80vw"} >
                    <DetailProductInfo />
                </Container>
                <Container maxW={"80vw"} mt={10}>
                    <Brands />
                </Container>
            </WebLayout>
        </>
    );
};

export default ShopList;