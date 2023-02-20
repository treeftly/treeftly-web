import { Box, useDisclosure } from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery } from 'react-query';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useHistory } from 'react-router-dom';

import {
  CategoriesContext,
  key,
  listCategories,
} from '../../services/categories';
import {
  createTransaction,
  key as transactionKey,
} from '../../services/transactions';
import { useAuth, useMutate } from '../../utils/hooks';
// @ts-expect-error TS(6142): Module '../Footer' was resolved to '/Users/matthew... Remove this comment to see the full error message
import Footer from '../Footer';
// @ts-expect-error TS(6142): Module '../header/Header' was resolved to '/Users/... Remove this comment to see the full error message
import Header from '../header/Header';
import Hidden from '../Hidden';
// @ts-expect-error TS(6142): Module '../transaction-modal/TransactionModal' was... Remove this comment to see the full error message
import TransactionModal from '../transaction-modal/TransactionModal';
// @ts-expect-error TS(6142): Module './MainLayout' was resolved to '/Users/matt... Remove this comment to see the full error message
import MainLayout from './MainLayout';

const getTitle = (pathname: any) => {
  if (!pathname) {
    return '';
  }

  const [, location] = pathname.split('/');

  if (!location) {
    return 'Dashboard';
  }

  const title = location
    .split('-')
    .map((str: any, idx: any) => {
      if (idx === 0) {
        return `${str[0].toUpperCase()}${str.substring(1)}`;
      }

      return str;
    })
    .join(' ');

  return title;
};
const Protected = ({ children }: any) => {
  const [height, setHeight] = useState();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { data: categories } = useQuery(key, listCategories);
  const history = useHistory();
  const { authData } = useAuth();
  const title = getTitle(history.location.pathname);

  const { mutate } = useMutate({
    mutateFn: createTransaction,
    key: transactionKey,
    successMsg: 'Successfully created transaction!',
    failureMsg: 'Error creating transaction',
    onSettled: onClose,
    onSuccess: () => {
      if (window.location.pathname !== '/transactions') {
        history.push('/transactions');
      }
    },
  });

  useEffect(() => {
    const onResize = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', onResize);
    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  if (!authData.accessToken) {
    history.push('/sign-in');
  }

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Helmet>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any'
        because no i... Remove this comment to see the full error message
        <title>{title}</title>
      </Helmet>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Header onNewTransaction={onOpen} />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Box
        as="main"
        h={{ base: `calc(${height}px - 130px)`, lg: 'calc(100vh - 65px)' }}
        maxH={{ base: `calc(${height}px - 130px)`, lg: 'calc(100vh - 65px)' }}
        overflow="scroll"
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <CategoriesContext.Provider value={categories}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <MainLayout minH="100%" bg="gray.100">
            {children}
          </MainLayout>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <TransactionModal isOpen={isOpen} onClose={onClose} mutate={mutate} />
        </CategoriesContext.Provider>
      </Box>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Hidden above="md">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Footer onNewTransaction={onOpen} />
      </Hidden>
    </>
  );
};

export default Protected;
