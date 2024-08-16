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

export const Cart = () => {
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
        <Box w="65%">
          <Box display={"flex"} alignItems={"center"}>
            <Heading>Cart</Heading>
            <Text fontSize={20}>({count} items)</Text>
          </Box>
          <Flex w="90%" my={5}>
            {[
              {
                id: "oneDay",
                src: day1,
                alt: "1 day Delivery",
                text: "1 day Delivery",
              },
              {
                id: "pickup",
                src: "https://i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-pickup.svg",
                alt: "Pickup",
                text: "Pickup",
              },
              {
                id: "quick",
                src: quick,
                alt: "20 Min Delivery",
                text: "20 Min Delivery",
              },
            ].map((option) => (
              <Box
                key={option.id}
                w={250}
                h={100}
                display="flex"
                alignItems="center"
                border={
                  selectedOption === option.id
                    ? "1px solid black"
                    : "1px solid #ccc"
                }
                flexDirection="column"
                justifyContent="center"
                borderRadius={5}
                ml={option.id === "oneDay" ? 0 : 5}
                onClick={() => setSelectedOption(option.id)}
                cursor="pointer"
              >
                <Image
                  src={option.src}
                  w={option.id === "pickup" ? "auto" : "20%"}
                />
                <Text
                  fontSize={12}
                  color={selectedOption === option.id ? "black" : "#ccc"}
                >
                  {option.text}
                </Text>
                <Text fontSize={12} color="#ccc">
                  Available
                </Text>
              </Box>
            ))}
          </Flex>
          <Box borderRadius={8} className="cart2">
            <Box h={100} bg="#F2F8FD" borderRadius={8}>
              <Box display={"flex"} alignItems={"center"} p={5}>
                <Image src="https://i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-shipping.svg" />
                <Text fontSize={20} ml={5} className="roboto-bold">
                  Shipping, arrives by Tue, Mar 5 <br /> <u>95829</u>
                </Text>
              </Box>
            </Box>
            {groceryItems.map((item, index) => (
              <Box key={index} borderBottom="1px solid #e0e0e0" p={4}>
                <Flex alignItems="center">
                  <Image src={item.image} alt={item.name} boxSize="100px" objectFit="cover" mr={4} />
                  <Box flex={1}>
                    <Text fontWeight="bold">{item.name}</Text>
                    <Text>Sold by <u>Your Local Seller: Dave</u></Text>
                    <Text className="roboto-bold">Fulfilled by Walmart</Text>
                  </Box>
                  <Box textAlign="right">
                    <Text fontWeight="bold" color="green">Rs. {item.price}</Text>
                    <Flex alignItems="center" mt={2}>
                      <Button size="sm" borderRadius="full">-</Button>
                      <Text mx={2}>1</Text>
                      <Button size="sm" borderRadius="full">+</Button>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            ))}
            <Box p={4}>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontWeight="bold">Total</Text>
                <Text fontWeight="bold" color="green" fontSize={20}>
                  Rs. {finalTotalPrice}
                </Text>
              </Flex>
            </Box>
          </Box>
          <Box borderRadius={8} className="cart2" mt={10} p={10}>
            <Text fontSize={20} className="roboto-bold">
              Recommended with your order
            </Text>
            <Flex w="100%" justifyContent={"space-evenly"} mt={5}>
              <Box>
                <Box display={"flex"} justifyContent={"flex-end"} fontSize={30}>
                  <Circle>
                    <CiHeart />
                  </Circle>
                </Box>
                <Box height={"200px"}>
                  <Image
                    src="https://i5.walmartimages.com/seo/U-S-Polo-Assn-Men-s-Long-Sleeve-Button-down-Shirt_266779bf-a78a-4c78-bf55-10c5ba924441.5a8bafca559a6b2113d0035e72ab84e4.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
                    alt="image1"
                    h="100%"
                  />
                </Box>
                <Box>
                  <Text fontSize={13} className="rotobo-regular">
                    Sponsored
                  </Text>
                  <Flex fontSize={20} alignItems={"center"}>
                    <Box>Rs. 1600</Box>
                  </Flex>
                  <Text>
                    U.S. Polo Assn. Men's Long Sleeve Button-down Shirt
                  </Text>
                  <Button
                    border={"1px solid black"}
                    borderRadius={20}
                    bg="white"
                    onClick={() => {
                      counter();
                      calculatePrice(1600);
                    }}
                  >
                    <GoPlus />
                    Add
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box w="35%" mt={-600} className="cart2" p={10} borderRadius={20}>
          <Box>
            <ChakraLink
              as={ReactRouterLink}
              to={auth ? "/product/checkout" : "/account/signUp"}
              textDecoration={"none"}
              _hover={"none"}
            >
              <Button w="100%" bg="#004F9A" borderRadius={20} color="white">
                Continue to checkout
              </Button>
            </ChakraLink>
          </Box>
          {/* <Box mt={5}>
            <Text textAlign={"center"}>
              For the best shopping experience <u>sign in</u>{" "}
            </Text>
          </Box> */}
          <br />
          <hr />
          <Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box display={"flex"}>
                <Box>
                  <Text className="roboto-bold">Subtotal</Text>
                </Box>
                <Box>({count} items)</Box>
              </Box>
              <Box>
                <Text className="roboto-bold" color="green">
                  Rs. {totalPrice}
                </Text>
              </Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box>
                <Text className="roboto-bold">Savings</Text>
              </Box>
              <Box>
                <Text className="roboto-bold" color="green">
                  Rs. 0.00
                </Text>
              </Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box></Box>
              <Box>
                <Text className="roboto-bold" color="green">
                  Rs. 0.00
                </Text>
              </Box>
            </Box>
          </Box>
          <br />
          <hr />
          <Box display={"flex"} justifyContent={"space-between"}>
            {selectedOption === "quick" ? (
              <>
                <Box>
                  <Text>Shipping (Quick Delivery)</Text>
                </Box>
                <Box>
                  <Text>Rs. 50.0</Text>
                </Box>
              </>
            ) : (
              <>
                <Box>
                  <Text>Shipping (below Rs. 500 minimum)</Text>
                </Box>
                <Box>
                  <Text>Rs. 0.00</Text>
                </Box>
              </>
            )}
          </Box>
          <br />
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box>
              <Text className="roboto-bold">Taxes</Text>
            </Box>
            <Box>
              <Text>Calculated at checkout</Text>
            </Box>
          </Box>
          <br />
          <hr />
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box>
              <Text className="roboto-bold">Estimated total</Text>
            </Box>
            <Box>
              <Text className="roboto-bold" color="green">
                Rs. {finalTotalPrice}
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </HStack>
  );
};
