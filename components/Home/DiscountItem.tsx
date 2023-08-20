import { Box, Text } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import DiscountItemCard from "./DiscountItemCard";
interface IProps { };

const DiscountItem: FC<IProps> = (props) => {
    const DiscountItemsTabs = ['Wood Chair', 'Plastic Chair', 'Sofa Collection'];
    const [tab, setTab] = useState({ name: "New Arrival" });
    const [works, setWorks] = useState<any>([])
    const [active, setActive] = useState(0);
    // useEffect(() => {
    //     const newWork = workImages.filter(workImage => {
    //         return workImage.category.toLowerCase() === tab.name;

    //     })
    //     setWorks(newWork)
    // }, [tab])

    const activeTab = (e: any, index: any) => {
        setTab({ name: e.target.textContent.toLowerCase() });
        setActive(index)
    }
    return (
        <>
            <Box textAlign={"center"} mt={20}>
                <Text fontSize={"40px"} fontWeight={'700 !important'} color='secondaryBlue.100' lineHeight={"1.2"}>
                    Discount Item
                </Text>
            </Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} cursor={'pointer'} gap={5} mt={10}>
                {DiscountItemsTabs?.map((workNav, index) => {
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
            <Box mt={10}>
                <DiscountItemCard/>
            </Box>
        </>
    )
};

export default DiscountItem;