import React, { useState } from "react";
import { fetchProductList, deleteProduct } from "../../api";
import { useQuery, useMutation, useQueryClient } from "react-query";
import moment from "moment";
import { Table, Popconfirm } from "antd";
import { Button, Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ProductList() {
  const [isAdmin, setIsAdmin] = useState(true);
  const queryClient = useQueryClient();
  const { isLoading, isError, data, error } = useQuery(
    "products",
    fetchProductList
  );
  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries("products"),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error {error.message}</div>;
  }
  console.log(data);
  const columns = [
    {
      title: "ID:",
      dataIndex: "id",
      key: "id",
      responsive: ["sm"],
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      responsive: ["sm"],
    },
    // {
    //   title: "Name",
    //   dataIndex: "name",
    //   key: "name",
    //   responsive: ["sm"],
    // },
    {
      title: "Display Name",
      dataIndex: "displayName",
      key: "displayName",
      responsive: ["sm"],
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      responsive: ["sm"],
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      responsive: ["sm"],
    },
    {
      title: "Insert Date",
      dataIndex: "idatetime",
      key: "idatetime",
      responsive: ["md"],
      render: (text, record) => {
        return <p> {moment(record.idatetime).format("DD:MM:YYYY, hh:mm:s")}</p>;
      },
    },
    {
      title: "Update Date",
      dataIndex: "udatetime",
      key: "udatetime",
      responsive: ["md"],
      render: (text, record) => {
        return (
          <p>
            {" "}
            {record.udatetime == "0001-01-01T00:00:00"
              ? "-"
              : moment(record.udatetime).format("DD:MM:YYYY, hh:mm:s")}
          </p>
        );
      },
    },
    {
      title: "Inserted User",
      dataIndex: "iuser",
      key: "iuser",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <Box display="flex" justifyContent="space-around">
          <Link to={`/product-list/${record.id}`}>
            <Button colorScheme="gray" variant="outline">
              View
            </Button>
          </Link>
          {isAdmin && (
            <Popconfirm
              title="Are you sure to delete this product?"
              onConfirm={() => {
                deleteMutation.mutate(record.id, {
                  onSuccess: () => {
                    console.log(`Product ${record.name} deleted!`);
                  },
                });
              }}
              onCancel={() => console.log("Canceled!")}
            >
              <Button colorScheme="red" variant="outline">
                Delete
              </Button>
            </Popconfirm>
          )}
        </Box>
      ),
    },
  ];

  return (
    <Box pt={5} mx={10}>
      <Box textAlign="center">
        <Heading mb={5} textAlign="center">
          Products
        </Heading>
        <Button
          size="sm"
          colorScheme={isAdmin ? "red" : "blue"}
          variant="solid"
          onClick={() => setIsAdmin(!isAdmin)}
        >
          Switch User
        </Button>
        <Text mt={2} fontSize="sm">
          Current User :{" "}
          <span style={{ color: isAdmin ? "red" : "blue" }}>
            {isAdmin ? "Admin" : "User"}
          </span>
        </Text>
      </Box>

      {/* ANTD TABLE */}
      <Table
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
        bordered
        dataSource={data.list}
        columns={columns}
        rowKey="id"
      ></Table>
      {/* CHAKRA TABLE */}
      {/* <Table variant="simple">
        <TableCaption>Emerce Products - Total ({data.totalCount})</TableCaption>
        <Thead>
          <Tr>
            <Th textAlign="center">ID</Th>
            <Th textAlign="center">Category</Th>
            <Th textAlign="center">Description</Th>
            <Th textAlign="center">Name</Th>
            <Th textAlign="center">Display Name</Th>
            <Th textAlign="center">Price</Th>
            <Th textAlign="center">Stock</Th>
            <Th textAlign="center">Insert Date</Th>
            <Th textAlign="center">Inserted User</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.list.map((item) => (
            <Tr key={item.id}>
              <Th textAlign="center">{item.id}</Th>
              <Th textAlign="center">{item.category}</Th>
              <Th textAlign="center">{item.description}</Th>
              <Th textAlign="center">{item.name}</Th>
              <Th textAlign="center">{item.displayName}</Th>
              <Th textAlign="center">{item.price}</Th>
              <Th textAlign="center">{item.stock}</Th>
              <Th textAlign="center">
                {moment(item.idatetime).format("D:M:YYYY, h:m:s")}
              </Th>
              <Th textAlign="center">
                {item.udatetime == null
                  ? "-"
                  : moment(item.udatetime).format("D:M:YYYY, h:m:s")}
              </Th>
              <Th textAlign="center">{item.iuser}</Th>
            </Tr>
          ))}
        </Tbody>
      </Table> */}
    </Box>
  );
}

export default ProductList;
