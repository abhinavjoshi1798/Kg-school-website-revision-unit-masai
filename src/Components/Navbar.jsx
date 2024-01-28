import { useState } from "react";
import { Box, Flex, Link, IconButton, useColorMode, Button, Divider } from "@chakra-ui/react";
import { HamburgerIcon, SunIcon, MoonIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.png.webp";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <Box
      bg={isDark ? "gray.800" : "white"}
      px={4}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      position={"fixed"}
      top={0}
      left={0}
      width="100%"
      fontFamily={"Concert One, cursive"}
      color={colorMode === "dark"?"white":"#423F8D"}
      fontWeight={900}
      fontSize={"20px"}
      // zIndex={1000}

    >
      <Flex 
      h={16} 
      alignItems="center" 
      justifyContent="space-between">
        <Flex>
          <Link href="/">
            <img src={logo} alt="Logo" />
          </Link>
        </Flex>
        <Flex>
          <Box 
          display={{ base: "none", md: "flex" }} 
          alignItems="center">
            <Link mr={4} href="/" _hover={{color:"#ec078d"}}>
              Home
            </Link>
            <Link mr={4} href="/class" _hover={{color:"#ec078d"}}>
              Class
            </Link>
            <Link mr={4} href="/about" _hover={{color:"#ec078d"}}>
              About
            </Link>
            <Link mr={4} href="/blog" _hover={{color:"#ec078d"}}>
              Blog
            </Link>
            <Link mr={4} href="/contact" _hover={{color:"#ec078d"}}>
              Contact
            </Link>
            <Link to="/enrollnow">
              <Button 
              backgroundColor={"#19d9df"}
              marginLeft={"15px"}
              marginRight={"5px"}
              color={"white"}
              fontSize={"17px"}
                 fontFamily={"DM Sans,Sans serif"}
                 fontWeight={900}
              _hover={{backgroundColor:"#19d9df"}}>
                Enroll Now
              </Button>
            </Link>
          </Box>

          <Box display={{ base: "flex", md: "flex" }}>
            <IconButton
              onClick={toggleColorMode}
              icon={isDark ? <SunIcon color={"gold"} /> : <MoonIcon color={"grey"} />}
              variant="ghost"
              aria-label="Toggle color mode"
            />
          </Box>

          <Box display={{ base: "flex", md: "none" }}>
            <IconButton
              onClick={handleToggle}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              variant="ghost"
              aria-label="Toggle navigation"
            />
          </Box>
        </Flex>
      </Flex>
      <Box
        pb={4}
        display={{ base: isOpen ? "block" : "none", md: "none" }}
      >
        <Divider borderWidth="2px" />
        <Flex flexDirection="column" alignItems="center">
          
          <Link py={2} href="/" _hover={{color:"#ec078d"}}>
            Home
          </Link>
          <Link py={2} href="/class" _hover={{color:"#ec078d"}}>
            Class
          </Link>
          <Link py={2} href="/about" _hover={{color:"#ec078d"}}>
            About
          </Link>
          <Link py={2} href="/blog" _hover={{color:"#ec078d"}}>
            Blog
          </Link>
          <Link py={2} href="/contact" _hover={{color:"#ec078d"}}>
            Contact
          </Link>
          <Link to="/enrollnow">
              <Button 
              backgroundColor={"#19d9df"}
              marginLeft={"15px"}
              marginRight={"5px"}
              color={"white"}
              fontSize={"17px"}
                 fontFamily={"DM Sans,Sans serif"}
                 fontWeight={900}
              _hover={{backgroundColor:"#19d9df"}}>
                Enroll Now
              </Button>
            </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
