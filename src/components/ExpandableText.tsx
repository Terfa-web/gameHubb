import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <Text>
      {summary}
      <Button
        marginLeft={1}
        onClick={() => setExpanded(!expanded)}
        colorScheme="yellow"
        fontWeight="bold"
        size="xs"
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
