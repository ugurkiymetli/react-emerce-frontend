import React from "react";
import { useQuery } from "react-query";
import moment from "moment";
import { Table } from "antd";
import {
  Box,
  Button,
  // Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  Heading,
} from "@chakra-ui/react";
import { fetchUserList } from "../../api";
function Users() {
  const { isLoading, isError, data, error } = useQuery("Users", fetchUserList);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error {error.message}</div>;
  }
  console.log(data);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      responsive: ["sm"],
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      responsive: ["sm"],
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      responsive: ["sm"],
    },
    {
      title: "E-Mail",
      dataIndex: "email",
      key: "email",
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
            {record.udatetime == null
              ? "-"
              : moment(record.udatetime).format("D:M:YYYY, h:m:s")}
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
          {/* <Link to={`/gelecek-varlik-hr/${record.id}`}> */}
          <Button colorScheme="gray" variant="outline">
            İncele
          </Button>
          {/* </Link> */}
        </Box>
      ),
    },
  ];
  return (
    <Box pt={10} mx={10}>
      <Heading mb={10} textAlign="center">
        Users
      </Heading>
      <Table
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
        bordered
        dataSource={data.list}
        columns={columns}
        rowKey="id"
      ></Table>
      {/* <Table variant="simple">
        <TableCaption>Emerce Users - Total ({data.totalCount})</TableCaption>
        <Thead>
          <Tr>
            <Th textAlign="center">ID</Th>
            <Th textAlign="center">Name</Th>
            <Th textAlign="center">Username</Th>
            <Th textAlign="center">Email</Th>
            <Th textAlign="center">Insert Date</Th>
            <Th textAlign="center">Update Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.list.map((item) => (
            <Tr key={item.id}>
              <Th textAlign="center">{item.id}</Th>
              <Th textAlign="center">{item.name}</Th>
              <Th textAlign="center">{item.username}</Th>
              <Th textAlign="center">{item.email}</Th>
              <Th textAlign="center">{item.iuser}</Th>
              <Th textAlign="center">
                {moment(item.idatetime).format("D:M:YYYY, h:m:s")}
              </Th>
              <Th textAlign="center">
                {item.udatetime == null
                  ? "-"
                  : moment(item.udatetime).format("D:M:YYYY, h:m:s")}
              </Th>
            </Tr>
          ))}
        </Tbody>
      </Table> */}
    </Box>
  );
}

export default Users;
