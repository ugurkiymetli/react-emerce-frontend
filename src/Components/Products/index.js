import React from "react";
import { fetchProductList } from "../../api";
import { Heading, Grid, Box } from "@chakra-ui/react";
import { useQuery } from "react-query";
import Card from "../Card";
function Products() {
  const { isLoading, isError, data, error } = useQuery(
    "products",
    fetchProductList
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error {error.message}</div>;
  }
  console.log(data);
  return (
    <>
      <Heading mb={5} textAlign="center">
        Products
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)">
        {data.list.map((item) => (
          <Card item={item}></Card>
        ))}
      </Grid>
    </>
  );
}

export default Products;
