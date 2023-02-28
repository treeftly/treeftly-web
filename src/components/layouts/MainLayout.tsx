import { Grid } from "@chakra-ui/react";
import React from "react";

const MainLayout = ({ children, ...rest }: any) => {
  return (
    <Grid
      templateColumns="1fr min(90ch, 98%) 1fr"
      templateRows="min-content"
      minH="fullVH"
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default MainLayout;
