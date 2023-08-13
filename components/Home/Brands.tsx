import React, { FC } from "react";
import { Stack } from "@chakra-ui/react";
import Image from "next/image";
interface IProps { };
const Brands: FC<IProps> = (props) => {
    return (
        <>
            <Stack display={'flex'} alignItems={'center'} justifyContent={'center'} >
                <Image src={'/Assets/brands.png'} alt='' width={800} height={800} />
            </Stack>
        </>
    )
};
export default Brands;