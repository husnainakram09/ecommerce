import { Box, useTheme, Text, Container } from "@chakra-ui/react";
import { Hero } from "@components/Home";
import FeaturedProducts from "@components/Home/FeaturedProducts";
import LatestProduct from "@components/Home/LeatestProducts";
import WebLayout from "@layout/index";
import ShopEx from "@components/Home/ShopEx";
import UniqueProduct from "@components/Home/UniqueProduct";
import TrendingProduct from "@components/Home/TrendingProduct";
import DiscountItem from "@components/Home/DiscountItem";
import Categories from "@components/Home/Categories";
import NewsLetter from "@components/Home/NewsLetter";
import Brands from "@components/Home/Brands";
import Blogs from "@components/Home/Blogs";
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
        <UniqueProduct />
        <Container maxW={"80vw"}>
          <TrendingProduct />
          <DiscountItem />
          <Categories />
        </Container>
        <NewsLetter />
        <Container maxW={"80vw"}>
          <Brands />
          <Blogs />
        </Container>
      </WebLayout>
    </>
  )
}
