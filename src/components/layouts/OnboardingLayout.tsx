import { Heading, Image, Link } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";
import { Link as RLink } from "react-router-dom";

import LogoWithText from "../../assets/logo-with-text.png";
import Container from "./Container";

const OnboardingLayout = ({ children, headerText }) => {
  return (
    <>
      <Container height={["80px", "120px"]} mt={["8", "16"]} mb="4">
        <Link to="/" as={RLink}>
          <Image height="100%" mx="auto" src={LogoWithText} />
        </Link>
      </Container>
      <Container
        border="1px"
        borderColor="gray.200"
        borderRadius="base"
        boxShadow="md"
        mx="auto"
        mb={["16", "20"]}
        minW={["100%", "100%", "650px"]}
        px="6"
        py="4"
        bg="white"
        height="maxContent"
      >
        <Heading
          as="h1"
          textAlign="center"
          mb={2}
          color="primary.600"
          fontFamily="montserrat"
          textTransform="uppercase"
          fontWeight="300"
        >
          {headerText}
        </Heading>
        {children}
      </Container>
    </>
  );
};

OnboardingLayout.propTypes = {
  headerText: PropTypes.string,
};

export default OnboardingLayout;
