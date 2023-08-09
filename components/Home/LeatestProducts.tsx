import React, { FC, useEffect, useState } from "react";
import { Box, HStack, SimpleGrid, Text } from "@chakra-ui/react"
import LatestProductCard from "./LatestProductCard";

interface IProps { };

const LatestProduct: FC<IProps> = (props) => {
    const [tab, setTab] = useState({ name: "New Arrival" });
    const [works, setWorks] = useState<any>([])
    const [active, setActive] = useState(0);
    const ProductsLatest = ['New Arrival', 'Best Seller', 'Featured', 'Special Offer']
    const workImages = [
        {
            id: 1,
            name: "project 1",
            category: "New Arrival",
        },
        {
            id: 2,
            name: "project 2",
            category: "Best Seller",

        },
        {
            id: 3,
            name: "project 3",
            category: "Featured",
        },
        {
            id: 4,
            name: "project 4",
            category: "Featured",
        },
        {
            id: 5,
            name: "project 5",
            category: 'Special Offer',
        },
        {
            id: 6,
            name: "project 6",
            category: "Special Offer",
        }
    ]
    useEffect(() => {
        const newWork = workImages.filter(workImage => {
            return workImage.category.toLowerCase() === tab.name;

        })
        setWorks(newWork)
    }, [tab])

    const activeTab = (e: any, index: any) => {
        setTab({ name: e.target.textContent.toLowerCase() });
        setActive(index)
    }
    return (
        <>
            <Box textAlign={"center"} mt={20}>
                <Text fontSize={"40px"} fontWeight={'700 !important'} color='secondaryBlue.100' lineHeight={"1.2"}>
                    Latest Products
                </Text>
            </Box>
            <Box display={'flex'} justifyContent={'center'} cursor={'pointer'} gap={5} mt={10}>
                {ProductsLatest?.map((workNav, index) => {
                    return (
                        <Text
                            onClick={(e) => activeTab(e, index)}
                            key={index}
                            color={active === index ? '#FB2E86' : '#151875'}
                            borderBottom={active === index ? '2px solid #FB2E86' : 'none'}
                        >{workNav}</Text>

                    )
                })}
            </Box>
            <SimpleGrid columns={{ sm: 1, md: 3 }} justifyItems={'center'}>
                {works.map((work: any) => {
                    return (
                        <div
                            key={work.id}
                        >
                            <LatestProductCard key={work?.id} />
                        </div>
                    )
                })}
            </SimpleGrid>
        </>
    )
};

export default LatestProduct;