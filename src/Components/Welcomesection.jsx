import { Box, Text, useColorMode, Image, Flex } from '@chakra-ui/react'
import React from 'react'
import Boxcards from './Boxcards';

let data = [
  {
    ImageSrc: "https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon1.svg",
    HeadingText: "Inter School Sports",
    ParagraphText: "The words you use in your written communication speak volumes."
  },
  {
    ImageSrc: "https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon2.svg",
    HeadingText: "Friendly Environment",
    ParagraphText: "The words you use in your written communication speak volumes."
  },
  {
    ImageSrc: "https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon3.svg",
    HeadingText: "Multimedia Class",
    ParagraphText: "The words you use in your written communication speak volumes."
  },
]

const Welcomesection = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box marginTop={"80px"}
      alignItems={"center"}
      display={"block"}
      px={{ base: "20px", md: "120px" }}
      bg={isDark ? "gray.800" : "white"}>
      <Text
        fontWeight={"900"}
        fontSize={"40px"}
        lineHeight={"1.2"}
        mb={"15px"}
        color={colorMode === "dark" ? "white" : "#423F8D"}
        fontFamily={"Fredoka One,cursive"}
      >Welcome to our <span style={{ color: "#ec078b" }}>Kindergarten</span></Text>
      <Text fontSize={{ base: "16px", lg: "18px" }}
        width={"70%"}
        margin={"auto"}
        fontFamily={"DM Sans,sans-serif"}
        color={colorMode === "dark" ? "white" : "#423F8D"}>Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue fowl male signs.</Text>
      <Box display={"flex"}
        p={{ base: "0px", lg: 10 }}
        flexDirection={{ base: "column", lg: "row" }}>
        <Box width={{ base: "100%", lg: "45%" }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          alignItems={"center"}
          gap={"40px"}
          p={5}>
          {
            data.map((el, i) => {
              return <Boxcards {...el} />
            })
          }
        </Box>

        <Box width={{ base: "100%", lg: "55%" }}
          mt={{ base: "20px", lg: "0px" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}>
          <Image src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/about2.png.webp" />
        </Box>


      </Box>
    </Box>
  )
}

export default Welcomesection
