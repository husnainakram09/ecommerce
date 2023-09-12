'use client'
import React from 'react';
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    Text
} from '@chakra-ui/react'
import HaktoButton from '@ui/Button'
import { useFormik } from 'formik';
import { signIn } from 'next-auth/react';
import router from 'next/router';
export default function LoginCard() {
    let formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values) => {

            const response = await signIn('credentials', {
                ...values,
                redirect: false,
            });

            if (response) console.log(response?.error);
            const { error }: any = response;

            if (error === null) {

                router.replace({ pathname: '/dashboard/home' });

            }
            if (error !== null) {
                console.log(response)
                return;
            }

        },
    });

    return (

        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}
            >
                <Stack>
                    <Text fontSize={{ base: '32px', md: '32px' }} textAlign={'center'} mb={0}>
                        Login
                    </Text>
                    <Text color={'#9096B2'} fontSize={14} textAlign={'center'} mt={0}>
                        Please login using account detail bellow.
                    </Text>
                </Stack>
                <form onSubmit={formik.handleSubmit} style={{ display: 'contents' }}>

                    <Input
                        name='email'
                        placeholder="Email Address"
                        type="Text"
                        onChange={formik.handleChange}
                        value={formik.values.email} // Bind the value to Formik

                    />
                    <Input
                        name='password'
                        placeholder="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password} // Bind the value to Formik

                    />

                    <Stack>
                        <Text color={'#9096B2'} fontSize={16}>Forgot password?</Text>
                    </Stack>
                    <Stack spacing={6}>
                        <HaktoButton text={'sign in'} action='submit' />
                    </Stack>
                </form>

                <Stack spacing={5} >
                    <Text color={'#9096B2'} textAlign={'center'}>Don’t have an Account?Create account</Text>
                </Stack>
            </Stack>

        </Flex>

    )
}