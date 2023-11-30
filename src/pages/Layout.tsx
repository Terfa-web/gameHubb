import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar margin-bottom={5} />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
