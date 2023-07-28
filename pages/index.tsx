import { Box, useTheme, Text } from "@chakra-ui/react";
import Hero from "@components/Home/Hero";
import WebLayout from "@layout/index";


export default function Home() {
  const theme = useTheme();
  const { primary, secondaryBlue } = theme.colors;

  return (
    <>
      <WebLayout>
        <Hero />
      </WebLayout>
    </>
  )
}
