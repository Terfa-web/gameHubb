import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import NavBar from "../components/NavBar";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box margin={3}>
        <Heading> Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist "
            : "This page does not exist"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
