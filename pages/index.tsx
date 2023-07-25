import { Box, useTheme, Text } from "@chakra-ui/react";
import InputComponent from "@/component/Inputs";
export default function Home() {
  const theme = useTheme();
  const { primary, secondaryBlue } = theme.colors;

  return (
    <>
      <Box bg='secondaryBlue.100' >
        <Text color="primary.100">
          Hello world!
        </Text>
      </Box >
      <InputComponent />
    </>
  )
}
