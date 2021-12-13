import React from "react";
import { fetchProduct } from "../api";
import {
  Text,
  Button,
  SimpleGrid,
  Box,
  Image,
  Center,
  Heading,
  Stack,
} from "@chakra-ui/react";
import moment from "moment";
import { useQuery } from "react-query";
import { useParams } from "react-router";

function ProductDetail() {
  const { product_id } = useParams();
  //   const { isLoading, isError, data, error } = useQuery(
  //     ["product", product_id],
  //     fetchProduct(product_id)
  //   );
  const { isLoading, isError, error, data } = useQuery(
    ["product", product_id],
    () => fetchProduct(product_id)
  );
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error {error.message}</div>;
  console.log(data.entity);

  return (
    <>
      <SimpleGrid columns={2} spacing={1} m={6} p={6}>
        <Center py={12}>
          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            // bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"195px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(https://via.placeholder.com/200x200)`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={195}
                width={282}
                objectFit={"cover"}
                src="https://via.placeholder.com/200x200"
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                {data.entity.category}
              </Text>
              <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                {data.entity.displayName}
              </Heading>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={800} fontSize={"xl"}>
                  {data.entity.price} ₺
                </Text>
                <Text textDecoration={"line-through"} color={"gray.600"}>
                  {(
                    parseInt(data.entity.price) *
                    (Math.random() * (1.5 - 1.1) + 1).toFixed(2)
                  ).toFixed(2)}{" "}
                  ₺
                </Text>

                <Text color={"gray.600"}>{}</Text>
              </Stack>
              {/* <Stack mt={8} direction={"row"} spacing={4}>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  color={"white"}
                  bg={"green.400"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "green.300",
                  }}
                >
                  Buy
                </Button>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "blue.200",
                  }}
                >
                  Add To Cart
                </Button>
              </Stack> */}
            </Stack>
          </Box>
        </Center>
        <Box
          p="3"
          w="100%"
          //   border="1px"
          //   borderColor="gray.200"
          //   borderWidth="1px"
          //   borderRadius="lg"
          boxShadow={"2xl"}
          rounded={"lg"}
        >
          <Text fontSize="3xl" my={5}>
            {data.entity.displayName}
          </Text>
          <Text my={5} fontSize="m">
            Added: {moment(data.entity.idatetime).format("DD/MM/YYYY")} <br />{" "}
            Updated: {moment(data.entity.udatetime).format("DD/MM/YYYY")}{" "}
          </Text>
          <Text fontSize="2xl">{data.entity.description}</Text>

          <Stack mt={8} direction={"row"} spacing={4}>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              color={"white"}
              bg={"green.400"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "green.300",
              }}
            >
              Buy
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.200",
              }}
            >
              Add To Cart
            </Button>
          </Stack>
          {/* <Text my={5} as="h3" fontSize="2xl">
            {data.entity.price} ₺
          </Text> */}
          {/* <Text> id: {data.entity.id} </Text>
          <Text> category: {data.entity.category} </Text>
          <Text> name: {data.entity.name} </Text>
          <Text> displayName: {data.entity.displayName} </Text>
          <Text> price: {data.entity.price} </Text>
          <Text> stock: {data.entity.stock} </Text>
          <Text> idatetime: {data.entity.idatetime} </Text>
          <Text> udatetime: {data.entity.udatetime} </Text>
          <Text> iuser: {data.entity.iuser} </Text> */}

          {/* <Button
            w="50%"
            mt="3"
            leftIcon={
              findBasketItem ? <MdRemoveShoppingCart /> : <MdAddShoppingCart />
            }
            colorScheme={findBasketItem ? "red" : "gray"}
            onClick={() => addToBasket(data, findBasketItem)}
          >
            {findBasketItem ? "Remove from Basket" : "Add to basket"}
          </Button> */}
        </Box>
      </SimpleGrid>
    </>
  );
}

export default ProductDetail;
