import {
  Box,
  Flex,
  Heading,
  Spacer,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import { addMonths, format, startOfMonth, subMonths } from 'date-fns';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useQuery } from 'react-query';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Route } from 'react-router-dom';

// @ts-expect-error TS(6142): Module '../../components/IconButton' was resolved ... Remove this comment to see the full error message
import IconButton from '../../components/IconButton';
// @ts-expect-error TS(6142): Module '../../components/layouts/PageLayout' was r... Remove this comment to see the full error message
import PageLayout from '../../components/layouts/PageLayout';
// @ts-expect-error TS(6142): Module '../../components/PageHeader' was resolved ... Remove this comment to see the full error message
import PageHeader from '../../components/PageHeader';
import { key, listTransactions } from '../../services/transactions';
import { formatCurrency } from '../../utils/functions';
// @ts-expect-error TS(6142): Module './TransactionItem' was resolved to '/Users... Remove this comment to see the full error message
import TransactionItem from './TransactionItem';
// @ts-expect-error TS(6142): Module './TransactionRow' was resolved to '/Users/... Remove this comment to see the full error message
import TransactionRow from './TransactionRow';

const setQuery = (startMonth: any) => {
  const formatDate = 'LLL dd, yyyy';
  return `date[$gte]=${format(startMonth, formatDate)}&date[$lt]=${format(
    addMonths(startMonth, 1),
    formatDate,
  )}`;
};

const Transactions = () => {
  const [currMonth, setCurrMonth] = useState(() => startOfMonth(new Date()));
  const {
    data: transactions,
    isError,
    refetch,
  } = useQuery(key, () => listTransactions(setQuery(currMonth)));
  const TableHeader = useBreakpointValue({
    base: (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Tr>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Th w="20px" />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Th>Date</Th>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Th isNumeric>Amount</Th>
      </Tr>
    ),
    md: (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Tr>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Th w="20px" />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Th>Date</Th>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Th>Category</Th>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Th isNumeric>Amount</Th>
      </Tr>
    ),
    lg: (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Tr>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Th w="20px" />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Th>Date</Th>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Th>Category</Th>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Th maxW="350px">Description</Th>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Th isNumeric>Amount</Th>
      </Tr>
    ),
  });

  useEffect(() => {
    refetch();
  }, [currMonth]);

  if (isError) {
    return null;
  }

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <PageHeader>Transactions</PageHeader>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <PageLayout>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Flex alignItems="center" flexFlow={{ lg: 'row', base: 'column' }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <Box display="flex" alignItems="center">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <IconButton
              ariaLabel="Toggle to previous month"
              label="Toggle to previous month"
              variant="ghost"
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              icon={<MdChevronLeft />}
              onClick={() => setCurrMonth(subMonths(currMonth, 1))}
            />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <Text mx={4} minW="124px" textAlign="center">
              {format(currMonth, 'LLLL yyyy')}
            </Text>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <IconButton
              ariaLabel="Toggle to next month"
              label="Toggle to next month"
              variant="ghost"
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              icon={<MdChevronRight />}
              onClick={() => setCurrMonth(addMonths(currMonth, 1))}
            />
          </Box>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <Spacer />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <Box mt={{ base: 4, lg: 0 }}>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any'
            because no i... Remove this comment to see the full error message
            Total: <strong>{formatCurrency(transactions?.total || 0)}</strong>
          </Box>
        </Flex>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Box my={4}>
          {transactions?.data.length > 0 ? (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Table variant="striped">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
              flag is provided... Remove this comment to see the full error
              message
              <Thead>{TableHeader}</Thead>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
              flag is provided... Remove this comment to see the full error
              message
              <Tbody>
                {transactions?.data.map((transaction: any) => (
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <TransactionRow key={transaction.id} data={transaction} />
                ))}
              </Tbody>
            </Table>
          ) : (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Heading textAlign="center" my="20" textColor="gray.400">
              No Transactions for this month
            </Heading>
          )}
        </Box>
      </PageLayout>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Route exact path="/transactions/:id">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <TransactionItem />
      </Route>
    </>
  );
};

export default Transactions;
