import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <Box width="100%" bg="black.800" px={4} py={2} my={5}>
      <Flex justify="center" width="100%">
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          align="center"
          wrap="wrap"
        >
          <Link to="/">
            <Button variant="ghost" colorScheme="whiteAlpha">Home</Button>
          </Link>
          <Link to="/events">
            <Button variant="ghost" colorScheme="whiteAlpha">Events</Button>
          </Link>
          <Link to="/schedule">
            <Button variant="ghost" colorScheme="whiteAlpha">Schedule</Button>
          </Link>
          <Link to="/booking">
            <Button variant="ghost" colorScheme="whiteAlpha">Booking</Button>
          </Link>
          <Link to="/contact-us">
            <Button variant="ghost" colorScheme="whiteAlpha">Contact Us</Button>
          </Link>
          <Link to="/about-us">
            <Button variant="ghost" colorScheme="whiteAlpha">About Us</Button>
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
}
