import { useToast } from '@chakra-ui/react'

export default () => {
  const toast = useToast({
    duration: 3000,
    position: 'top-right',
    isClosable: true,
  })

  return toast
}
