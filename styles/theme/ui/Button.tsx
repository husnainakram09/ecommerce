import React, { FC } from "react";
import { Button } from "@chakra-ui/button";
import { Box, useTheme } from "@chakra-ui/react";
interface IProps { };

const HaktoButton: FC<IProps> = (props) => {
    const theme = useTheme();
    const { primary } = theme.colors;
    return (
        <Box display={'flex'} ms={130}>
            <Button size={"lg"}
                height='48px'
                width='200px'
                color={'white'}
                bg={'primary.100'}
                _hover={{ bg: 'primary.100' }}
            >Shop Now</Button>
        </Box>
    )
};

export default HaktoButton;