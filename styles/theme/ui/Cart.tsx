import { Stack } from "@chakra-ui/react";
import React, { FC } from "react";
import Image from "next/image";
interface IProps {}
const Cart: FC<IProps> = (props) => {
  const iconData = [
    { src: "/Assets/Buy.svg", alt: "Buy" },
    { src: "/Assets/favourite.svg", alt: "Favorite" },
    { src: "/Assets/zoom.svg", alt: "Zoom" },
  ];
  return (
    <Stack spacing={4} direction="row">
      {iconData.map((icon, index) => (
        <Image
          key={index}
          src={icon.src}
          alt={icon.alt}
          width={20}
          height={20}
        />
      ))}
    </Stack>
  );
};
export default Cart;
