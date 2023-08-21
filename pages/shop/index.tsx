import React, { FC } from "react";
import WebLayout from "@layout/index";
import HeroSection from "@ui/HeroSection";
interface IProps { };

const Shop: FC<IProps> = (props) => {
    const pages = ['Home .', 'Pages .', 'Shop Grid Default'];
    return (
        <>
            <WebLayout>
                <HeroSection title={'Shop Grid Default'} pages={pages} />
            </WebLayout>
        </>
    )
};

export default Shop;