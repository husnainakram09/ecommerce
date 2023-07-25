/* eslint-disable react/no-children-prop */
import { Stack, InputGroup, Input, InputRightElement, useTheme } from "@chakra-ui/react";
import React, { FC } from "react";
import { Search2Icon } from "@chakra-ui/icons";

interface IProps {
    placeholder?: string;
}

const InputComponent: FC<IProps> = (props) => {
    const theme = useTheme();
    const { primary, secondaryBlue } = theme.colors;

    return (
        <>
            <Stack spacing={4}>
                <InputGroup w='300px'>
                    <Input placeholder='' _focus={{ boxShadow: 'none' }} />
                    <InputRightElement bg='primary.100'>
                        <Search2Icon color='white' />
                    </InputRightElement>
                </InputGroup>
            </Stack>
        </>
    );
};

export default InputComponent;
