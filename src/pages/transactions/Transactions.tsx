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
} from "@chakra-ui/react";
import { addMonths, format, startOfMonth, subMonths } from "date-fns";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useQuery } from "react-query";
import { Route } from "react-router-dom";

import IconButton from "../../components/IconButton";
import PageLayout from "../../components/layouts/PageLayout";
import PageHeader from "../../components/PageHeader";
import { key, listTransactions } from "../../services/transactions";
import { formatCurrency } from "../../utils/functions";
import TransactionItem from "./TransactionItem";
import TransactionRow from "./TransactionRow";

const setQuery = (startMonth: any) => {
  const formatDate = "LLL dd, yyyy";
  return `date[$gte]=${format(startMonth, formatDate)}&date[$lt]=${format(
    addMonths(startMonth, 1),
    formatDate
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
      <Tr>
        <Th w="20px" />
        <Th>Date</Th>
        <Th isNumeric>Amount</Th>
      </Tr>
    ),
    md: (
      <Tr>
        <Th w="20px" />
        <Th>Date</Th>
        <Th>Category</Th>
        <Th isNumeric>Amount</Th>
      </Tr>
    ),
    lg: (
      <Tr>
        <Th w="20px" />
        <Th>Date</Th>
        <Th>Category</Th>
        <Th maxW="350px">Description</Th>
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
    <>
      <PageHeader>Transactions</PageHeader>
      <PageLayout>
        <Flex alignItems="center" flexFlow={{ lg: "row", base: "column" }}>
          <Box display="flex" alignItems="center">
            <IconButton
              ariaLabel="Toggle to previous month"
              label="Toggle to previous month"
              variant="ghost"
              icon={<MdChevronLeft />}
              onClick={() => setCurrMonth(subMonths(currMonth, 1))}
            />
            <Text mx={4} minW="124px" textAlign="center">
              {format(currMonth, "LLLL yyyy")}
            </Text>
            <IconButton
              ariaLabel="Toggle to next month"
              label="Toggle to next month"
              variant="ghost"
              icon={<MdChevronRight />}
              onClick={() => setCurrMonth(addMonths(currMonth, 1))}
            />
          </Box>
          <Spacer />
          <Box mt={{ base: 4, lg: 0 }}>
            Total: <strong>{formatCurrency(transactions?.total || 0)}</strong>
          </Box>
        </Flex>
        <Box my={4}>
          {transactions?.data.length > 0 ? (
            <Table variant="striped">
              <Thead>{TableHeader}</Thead>
              <Tbody>
                {transactions?.data.map((transaction: any) => (
                  <TransactionRow key={transaction.id} data={transaction} />
                ))}
              </Tbody>
            </Table>
          ) : (
            <Heading textAlign="center" my="20" textColor="gray.400">
              No Transactions for this month
            </Heading>
          )}
        </Box>
      </PageLayout>
      <Route exact path="/transactions/:id">
        <TransactionItem />
      </Route>
    </>
  );
};

export default Transactions;
