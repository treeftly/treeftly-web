import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  Flex,
  IconButton,
  Tooltip,
  Image,
  useDisclosure,
  DrawerBody,
} from '@chakra-ui/react'
import { MdMenu } from 'react-icons/md'
import React from 'react'
import LogoText from '../../assets/logo-with-text.png'
import Nav from './Nav'

const SideNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex alignItems='center' mr='4'>
        <Tooltip label='Open navigation' aria-label='tooltip to open side nav'>
          <IconButton
            aria-label='open navigation'
            onClick={onOpen}
            variant='ghost'
            icon={<MdMenu />}
            fontSize='25px'
          />
        </Tooltip>
      </Flex>
      <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px' height='65px' py='1'>
              <Image height='100%' src={LogoText} alt='treeftly logo' />
            </DrawerHeader>
            <DrawerBody>
              <Nav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default SideNav
