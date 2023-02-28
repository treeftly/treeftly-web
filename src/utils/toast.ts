import { useToast } from "@chakra-ui/react";

export default () => {
  const toast = useToast({
    duration: 3000,
    position: "top-left",
    isClosable: true,
  });

  return toast;
};
