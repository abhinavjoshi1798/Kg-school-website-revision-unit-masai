import { Box, Text } from '@chakra-ui/react';
import React from 'react'

const Images = [
  "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img3.png.webp",
  "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img2.png.webp",
  "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img1.png.webp",
];

const Offersection = () => {
  return (
    <Box backgroundImage={"https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/section_bg1.png.webp"} p={15}>
      <Box mt={"80px"}>
        <Text fontWeight={"900"}
          fontSize={"40px"}
          lineHeight={"1.2"}
          mb={"15px"}
          color={"#423F8D"}
          fontFamily={"Fredoka One,cursive"}
        >Classes we offer</Text>
        <Text fontSize={{ base: "16px", lg: "18px" }}
          width={"60%"}
          margin={"auto"}
          fontFamily={"DM Sans,sans-serif"}
          color={"#423F8D"}>Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue.</Text>
      </Box>
      <Box display={"grid"} 
            gridTemplateColumns={{ base: "repeat(1,1fr)", 
            md: "repeat(2,1fr)", 
            lg: "repeat(3,1fr)" }} 
            gridTemplateRows={"repeat(1fr,1))"} 
            width={{ base: "90%", md: "80%", lg: "75%" }} 
            margin={"auto"} 
            gap={"40px"}>
                {
                    // Images.map((el, i) => <ProductCard image={el} key={i} />)
                }
            </Box>
    </Box>
  )
}

export default Offersection
