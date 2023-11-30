import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.04)",
        transition: "transform .15s ease-in",
      }}
      borderRadius={"10px"}
      overflow="hidden"
      margin-top="20px"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
