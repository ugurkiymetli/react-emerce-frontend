import React from "react";
import { fetchProductList } from "../../api";
import { useQuery } from "react-query";
import moment from "moment";
import { Table } from "antd";
import { Button, Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ProductList() {
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
      title: "İncele",
      dataIndex: "action",
      render: (text, record) => (
        <Box>
          <Link to={`/product-list/${record.id}`}>
            <Button colorScheme="gray" variant="outline">
              İncele
            </Button>
          </Link>
        </Box>
      ),
    },
  ];

  return (
    <Box pt={5} mx={10}>
      <Heading mb={5} textAlign="center">
        Products
      </Heading>
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
