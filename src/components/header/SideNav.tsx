import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { MdMenu } from 'react-icons/md';

import LogoText from '../../assets/logo-with-text.png';
import IconButton from '../IconButton';
import Nav from './Nav';

const SideNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex alignItems="center" mr="4">
        <IconButton
          label="Open navigation"
          ariaLabel="open navigation"
          onClick={onOpen}
          variant="ghost"
          icon={<MdMenu />}
        />
      </Flex>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px" height="65px" py="1">
              <Image height="100%" src={LogoText} alt="treeftly logo" />
            </DrawerHeader>
            <DrawerBody>
              <Nav onClose={onClose} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default SideNav;
