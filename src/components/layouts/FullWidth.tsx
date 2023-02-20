import { Box } from "@chakra-ui/react";
import React from "react";

const FullWidth = ({ children, ...rest }) => {
  return (
    <Box width="100%" gridColumn="1/4" {...rest}>
      {children}
    </Box>
  );
};

export default FullWidth;
