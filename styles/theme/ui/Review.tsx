import { StarIcon } from "@chakra-ui/icons";
import React, { FC } from "react";

interface IProps { };

const Review: FC<IProps> = (props) => {
    return (
        <>
            {
                [1, 2, 3, 4, 5].map((item, index) => {
                    return (
                        <StarIcon fontSize={16} key={index} color={index < 4 ? '#FFC416' : "lightgray"} />
                    )
                })
            }
        </>
    )
};

export default Review;