import React from 'react';
import { Flex, Stack, Text } from '@chakra-ui/react';
import HaktoButton from '@ui/Button';

const NewsLetter = () => {
    return (
        <Flex
            height={{ base: "20vh", md: "80vh", lg: "80vh" }}
            justifyContent="center"
            alignItems="center"
            bgImage="url('/Assets/newsLetter.png')"
            bgSize="contain"
            bgPos="center"
            bgRepeat="no-repeat"
            pos="relative"
            direction="column"
        >
            <Stack spacing={4} align="center">
                {/* Your text content */}

                <Text color="#151875" display={{ base: 'none', md: 'block', lg: 'block' }} fontSize={"20px"} fontWeight={'500 !important'} lineHeight={1.2}>
                    Get Leatest Update By Subscribe
                    0ur Newslater
                </Text>

                {/* Your button */}
                <HaktoButton text="Shop Now" />
            </Stack>
        </Flex>
    );
};

export default NewsLetter;
