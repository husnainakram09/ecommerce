import React, { FC } from "react";
import { Button } from "@chakra-ui/button";
import { Box, ButtonProps, useTheme } from "@chakra-ui/react";
interface IProps {
    button?: ButtonProps
    text: any
    type?: "primary" | "success"
};

const HaktoButton: FC<IProps> = ({ button, text, type = "primary" }) => {
    const theme = useTheme();
    const { primary } = theme.colors;
    return (
        // never centered any element in kit unless it is necessary everywhere.
        // <Box display={'flex'} ms={130}>
        <>
            <Button size={"lg"}
                height='48px'
                width='200px'
                color={'white'}
                bg={`${type}.100`}
                _hover={{ bg: 'primary.100' }}
                {...button}
            // ui  kit is used for multi purpose 
            // so design it that you can use every where
            // >Shop Now</Button>
            >{text}</Button>
        </>
    )
};

export default HaktoButton;