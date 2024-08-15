import {
  Box,
  Button,
  Circle,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useNavigate } from "react-router-dom";

// Import images
import eggsImg from "../assets/eggs.webp";
import fruitBreadImg from "../assets/fruit-bread.png";
import greenTeaImg from "../assets/green tea.png";
import greenApplesImg from "../assets/green-apples.jpg";
import oatsImg from "../assets/oats.jpg";
import primeMangoImg from "../assets/prime-mango.jpg";

const Products1 = () => {
  const { counter, calculatePrice } = useContext(AuthContext);
  const navigate = useNavigate();

  const products = [
    { img: greenApplesImg, title: "Green Apples 1Kg", price: 199 },
    { img: eggsImg, title: "Farm Fresh Eggs (Pack of 12)", price: 89 },
    { img: fruitBreadImg, title: "Fruit & Nut Bread 400g", price: 129 },
    { img: greenTeaImg, title: "Organic Green Tea 100g", price: 249 },
    { img: oatsImg, title: "Rolled Oats 500g", price: 179 },
    { img: primeMangoImg, title: "Prime - Mango Energy Drink 500ml", price: 99 },
  ];

  return (
    <Box width="100%">
      <Flex width="100%" flexWrap="wrap" justifyContent="space-between" mt={5}>
        {products.map((product, index) => (
          <Box key={index} mb={5} width={["100%", "48%", "31%", "23%", "15%"]} mx={1}>
            <Box display="flex" justifyContent="flex-end" fontSize={30}>
              <Circle>
                <CiHeart />
              </Circle>
            </Box>
            <Box height="200px" onClick={() => navigate("/product/details")}>
              <Image src={product.img} alt={product.title} h="100%" objectFit="contain" />
            </Box>
            <Box>
              <Text fontSize={13} className="rotobo-regular">
                Walmart's Choice
              </Text>
              <Flex fontSize={20} alignItems="center">
                <Box style={{ color: "green" }}>Now ₹{product.price}</Box>
                <Box fontSize={40}>
                  <RxCross2 />
                </Box>
                <Box ml={-10}>₹{(product.price * 1.2).toFixed(2)}</Box>
              </Flex>
              <Text>
                {product.title}
              </Text>
              <Button
                border="1px solid black"
                borderRadius={20}
                bg="white"
                onClick={() => {
                  counter();
                  calculatePrice(product.price);
                }}
              >
                <GoPlus />
                Add
              </Button>
            </Box>
          </Box>
        ))}
      </Flex>
      <Flex justifyContent="flex-end" mt={4}>
        <Button
          fontSize={30}
          border="1px solid black"
          borderRadius="100%"
        >
          <LiaGreaterThanSolid />
        </Button>
      </Flex>
    </Box>
  );
};

export default Products1;