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
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { MdMenu } from 'react-icons/md';

// @ts-expect-error TS(2307): Cannot find module '../../assets/logo-with-text.pn... Remove this comment to see the full error message
import LogoText from '../../assets/logo-with-text.png';
// @ts-expect-error TS(6142): Module '../IconButton' was resolved to '/Users/mat... Remove this comment to see the full error message
import IconButton from '../IconButton';
// @ts-expect-error TS(6142): Module './Nav' was resolved to '/Users/matthew/Pro... Remove this comment to see the full error message
import Nav from './Nav';

const SideNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Flex alignItems="center" mr="4">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <IconButton
          label="Open navigation"
          ariaLabel="open navigation"
          onClick={onOpen}
          variant="ghost"
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          icon={<MdMenu />}
        />
      </Flex>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <DrawerOverlay>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <DrawerContent>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <DrawerHeader borderBottomWidth="1px" height="65px" py="1">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
              flag is provided... Remove this comment to see the full error
              message
              <Image height="100%" src={LogoText} alt="treeftly logo" />
            </DrawerHeader>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <DrawerBody>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
              flag is provided... Remove this comment to see the full error
              message
              <Nav onClose={onClose} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default SideNav;
