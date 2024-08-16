import {
    Box,
    Button,
    Circle,
    Flex,
    HStack,
    Heading,
    Image,
    Text,
  } from "@chakra-ui/react";
  import { Link as ReactRouterLink } from "react-router-dom";
  import { Link as ChakraLink } from "@chakra-ui/react";
  import React, { useContext, useEffect, useState } from "react";
  
  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react";
  import { CiHeart } from "react-icons/ci";
  import { GoPlus } from "react-icons/go";
  import { AuthContext } from "../AuthContext/AuthProvider";
  import day1 from "../assets/1 day.png";
  import quick from "../assets/quick.png";
  
  // Import grocery item images
  import greenApplesImg from "../assets/green-apples.jpg";
  import eggsImg from "../assets/eggs.webp";
  import fruitBreadImg from "../assets/fruit-bread.png";
  import greenTeaImg from "../assets/green tea.png";
  import oatsImg from "../assets/oats.jpg";
  import primeMangoImg from "../assets/prime-mango.jpg";
  
  export const Trackorder = () => {
    const { setCart } = useContext(AuthContext);
    const { auth } = useContext(AuthContext);
    const { counter, count, totalPrice, calculatePrice } = useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState("pickup");
  
    useEffect(() => {
      setCart();
      return setCart;
    });
  
    const groceryItems = [
      { name: "Green Apples 1Kg", price: 199, image: greenApplesImg },
      { name: "Farm Fresh Eggs (Pack of 12)", price: 89, image: eggsImg },
      { name: "Fruit & Nut Bread 400g", price: 129, image: fruitBreadImg },
      { name: "Organic Green Tea 100g", price: 249, image: greenTeaImg },
      { name: "Rolled Oats 500g", price: 179, image: oatsImg },
      { name: "Prime - Mango Energy Drink 500ml", price: 99, image: primeMangoImg }
    ];
  
    // Calculate final total based on the selected delivery option
    const finalTotalPrice = selectedOption === "quick" ? totalPrice + 50 : totalPrice;
  
    return (
        <HStack>
        <Flex
          minWidth="max-content"
          alignItems="center"
          gap="4"
          w="80%"
          margin="auto"
          mt={20}
        >
          <Box w="80%" margin="auto" mt={5}>
            <Heading as="h2" size="xl" mb={6}>
              Track Your Orders
            </Heading>
  
            <Box mb={10}>
              <Heading as="h3" size="lg" mb={4}>
                Active Orders
              </Heading>
              <Box borderWidth={1} borderRadius="lg" p={4}>
                <Heading as="h4" size="md" mb={2}>
                  Order #12345
                </Heading>
                <Text>Status: Out for Delivery</Text>
                <Text>Estimated Delivery: August 18, 2024</Text>
                <Text>Total: Rs. 994</Text>
                
                {/* Progress Bar */}
                <Box mt={4} mb={2}>
                  <Flex justify="space-between" mb={2}>
                    <Text fontWeight="bold">In Process</Text>
                    <Text fontWeight="bold">Out for Delivery</Text>
                    <Text fontWeight="bold">Delivered</Text>
                  </Flex>
                  <Box bg="gray.200" h="8px" w="100%" borderRadius="full">
                    <Box bg="green.500" h="100%" w="66%" borderRadius="full"/>
                  </Box>
                </Box>
                <Text fontSize="sm" color="gray.600" mb={4}>
                  Order will be delivered by your Local Grocer: Gunjan
                </Text>
  
                <Box mt={2}>
                  {groceryItems.slice(0, 3).map((item, index) => (
                    <HStack key={index} mt={2}>
                      <Image src={item.image} boxSize="50px" objectFit="cover" />
                      <Text>{item.name}</Text>
                      <Text>Rs. {item.price.toFixed(2)}</Text>
                    </HStack>
                  ))}
                  <Text mt={2} fontWeight="bold">...</Text>
                </Box>
              </Box>
            </Box>
  
            <Box>
              <Heading as="h3" size="lg" mb={4}>
                Previous Orders
              </Heading>
              <Text>You have no previous orders.</Text>
            </Box>
          </Box>
        </Flex>
      </HStack>
    );
  };
  