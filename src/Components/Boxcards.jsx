import React from 'react';
import { Box, Text, useColorMode, Image, Flex } from '@chakra-ui/react'

const Boxcards = ({ ImageSrc, HeadingText, ParagraphText }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    return (
        <>

            <Box display={"flex"}
                flexDirection={"row"}
                width={{ base: "100%", lg: "70%" }}
                gap={"30px"}>
                <Flex width={"20%"}>
                    <Image src={ImageSrc} />
                </Flex>
                <Box width={{ base: "100%", lg: "80%" }}
                    display={"block"}
                    textAlign={"start"}>
                    <Text fontFamily={"Fredoka One,cursive"}
                        color={"#1F97D4"}
                        fontSize={{ base: "20px", lg: "25px" }}
                        fontWeight={"600"}>{HeadingText}</Text>
                    <Text color={colorMode === "dark" ? "white" : "#423F8D"}
                        width={"100%"}>{ParagraphText}</Text>
                </Box>
            </Box>

        </>
    )
}

export default Boxcards
