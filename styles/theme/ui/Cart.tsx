import { Stack } from "@chakra-ui/react";
import React, { FC } from "react";
import Image from "next/image";
interface IProps {
  isLatest?: boolean;
}
const Cart: FC<IProps> = ({ isLatest }) => {
  const [isMouseEnter, setIsMouseEnter] = React.useState(false);
  const handleMouseEnter = () => {
    setIsMouseEnter(true)
  }
  const handleMouseLeave = () => {
    setIsMouseEnter(false)
  }
  const iconData = [
    { src: "/Assets/Buy.svg", alt: "Buy" },
    { src: "/Assets/favourite.svg", alt: "Favorite" },
    { src: "/Assets/zoom.svg", alt: "Zoom" },
  ];
  return (
    <Stack spacing={4} direction={isLatest ? 'column' : "row"}>
      {iconData.map((icon, index) => (
        <Stack key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} cursor={'pointer'}>
          <Image
            src={icon.src}
            alt={icon.alt}
            width={20}
            height={20}
          />
        </Stack>
      ))}
    </Stack>
  );
};
export default Cart;
