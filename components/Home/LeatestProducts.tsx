import React, { FC, useEffect, useState } from "react";
import { Box, HStack, Text } from "@chakra-ui/react"
import LatestProductCard from "./LatestProductCard";

interface IProps { };

const LatestProduct: FC<IProps> = (props) => {
    const [tab, setTab] = useState({ name: "New Arrival" });
    console.log(tab);

    const [works, setWorks] = useState<any>([])
    const [active, setActive] = useState(0);
    const ProductsLatest = ['New Arrival', 'Best Seller', 'Featured', 'Special Offer']
    const workImages = [
        {
            id: 1,
            //   img: work3,
            name: "project 1",
            category: "New Arrival",
            link: "https://script-calculator.netlify.app/"
        },
        {
            id: 2,
            //   img: work2,
            name: "project 2",
            category: "Best Seller",
            link: "https://webcalender.netlify.app/"

        },
        {
            id: 3,
            //   img: work1,
            name: "project 3",
            category: "Featured",
            link: "https://zain-holy-player.netlify.app/"
        },
        {
            id: 4,
            //   img: work4,
            name: "project 4",
            category: "Featured",
            link: "https://my-resto-web.netlify.app/"
        },
        {
            id: 5,
            //   img: work5,
            name: "project 5",
            category: 'Special Offer',
            link: "https://bankapp-1e1df.web.app/"
        },
        {
            id: 6,
            //   img: work6,
            name: "project 6",
            category: "Special Offer",
            link: "https://github.com/zainbinshakoor/rn-hackathon"
        }
    ]
    useEffect(() => {
        if (tab.name === "all") {
            setWorks(workImages)
        } else {
            const newWork = workImages.filter(workImage => {
                return workImage.category.toLowerCase() === tab.name;

            })
            setWorks(newWork)
        }
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
            <HStack justify={'center'}>
                {works.map((work: any) => {
                    return (
                        <div
                            key={work.id}
                        >
                            <LatestProductCard key={work?.id} />
                        </div>
                    )
                })}
            </HStack>
        </>
    )
};

export default LatestProduct;