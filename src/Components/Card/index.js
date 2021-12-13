import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import moment from "moment";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      m={3}
      pb="1"
    >
      <Link to={`/product-list/${item.id}`}>
        <Heading mb={2} size="md" textAlign="center" isTruncated>
          {item.name}
        </Heading>
        <Box>
          <Image
            src="https://via.placeholder.com/200x200"
            objectFit="scale-down"
            alt={item.description}
            loading="lazy"
            mx="auto"
            alignSelf="center"
          />
        </Box>
        <Box p="6">
          <Box mt="1">
            <Text fontWeight="semibold" lineHeight="tight" fontSize={20}>
              {item.displayName}
            </Text>
          </Box>
          <small>
            <Box d="plex" alignItems="baseline"></Box>
          </small>
          <Box>
            {item.price} - <small>Stokta: {item.stock}</small>
          </Box>
        </Box>
      </Link>
    </Box>
  );
}

export default Card;
