import { Box, useTheme, Text } from "@chakra-ui/react";
import InputComponent from "@/component/Inputs";
import TopNav from "@/component/TopNav";
import WithSubnavigation from "@/component/navbar";
export default function Home() {
  const theme = useTheme();
  const { primary, secondaryBlue } = theme.colors;

  return (
    <>
      <TopNav />
      <WithSubnavigation/>
    </>
  )
}
