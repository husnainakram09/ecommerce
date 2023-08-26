'use client'
import React from 'react'
import Image from 'next/image'
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react'
import { EditIcon } from "@chakra-ui/icons";
import { CalendarIcon } from "@chakra-ui/icons";

export default function BlogCardImage({ img }: any) {
    const [isMouseEnter, setIsMouseEnter] = React.useState(false)
    const handleMouseEnter = () => {
        setIsMouseEnter(true)
    }
    const handleMouseLeave = () => {
        setIsMouseEnter(false)
    }
    return (
        <Center onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} cursor={'pointer'}>
            <Box
                maxW={'350px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'md'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                    <Image
                        src={img}
                        fill
                        alt="Example"
                    />
                </Box>
                <Stack>
                    <Box display="flex" alignItems="center" >
                        {/* Chakra UI Icon */}
                        <EditIcon boxSize={4} color="#FB2E86" mr={1} />
                        {/* Text with icon */}
                        <Text fontSize="sm" mt={2}>Zain</Text>
                        <CalendarIcon boxSize={4} color="#FFA454" ml={3} mr={1} />
                        {/* Text with icon */}
                        <Text fontSize="sm" mt={1}>21 August,2020</Text>
                    </Box>
                    <Heading
                        color={isMouseEnter ? '#FB2E86' : '#151875'}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        Top essential trends in 2021
                    </Heading>
                    <Text color={'lightgray'}>
                        More off this less hello samlande lied much
                        over tightly circa horse taped mightly
                    </Text>
                </Stack>
                <Stack>
                    <Text as={'ins'} color={isMouseEnter ? '#FB2E86' : '#151875'}>
                        Read More
                    </Text>
                </Stack>

            </Box>
        </Center>
    )
}