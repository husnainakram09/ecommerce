import { Box, useTheme, Text, Container } from "@chakra-ui/react";
import { Hero } from "@components/Home";
import FeaturedProducts from "@components/Home/FeaturedProducts";
import LatestProduct from "@components/Home/LeatestProducts";
import WebLayout from "@layout/index";
import ShopEx from "@components/Home/ShopEx";
import UniqueProduct from "@components/Home/UniqueProduct";


export default function Home() {
  const theme = useTheme();
  const { primary, secondaryBlue } = theme.colors;

  return (
    <>
      <WebLayout>
        <Hero />
        <Container maxW={"80vw"}>
          <FeaturedProducts />
          <LatestProduct />
          <ShopEx />
        </Container>
        <Container maxW={"100vw"}>
        </Container>
          <UniqueProduct />
      </WebLayout>
    </>
  )
}
