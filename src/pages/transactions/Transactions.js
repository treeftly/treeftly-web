import { Box, Flex, Heading, Spacer, Text } from '@chakra-ui/layout'
import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/table'
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { useQuery } from 'react-query'
import { Route } from 'react-router'
import { startOfMonth, format, addMonths, subMonths } from 'date-fns'
import IconButton from '../../components/IconButton'
import PageLayout from '../../components/layouts/PageLayout'
import PageHeader from '../../components/PageHeader'
import { listTransactions, key } from '../../services/transactions'
import { formatCurrency } from '../../utils/functions'
import TransactionItem from './TransactionItem'
import TransactionRow from './TransactionRow'

const setQuery = (startMonth) => {
  const formatDate = 'LLL dd, yyyy'
  return `date[$gte]=${format(startMonth, formatDate)}&date[$lt]=${format(
    addMonths(startMonth, 1),
    formatDate
  )}`
}

const Transactions = () => {
  const [currMonth, setCurrMonth] = useState(() => startOfMonth(new Date()))
  const { data: transactions, isError, refetch } = useQuery(key, () =>
    listTransactions(setQuery(currMonth))
  )

  useEffect(() => {
    refetch()
  }, [currMonth])

  if (isError) {
    return null
  }

  return (
    <>
      <PageHeader>Transactions</PageHeader>
      <PageLayout>
        <Flex alignItems='center'>
          <Box display='flex' alignItems='center'>
            <IconButton
              ariaLabel='Toggle to previous month'
              label='Toggle to previous month'
              variant='ghost'
              icon={<MdChevronLeft />}
              onClick={() => setCurrMonth(subMonths(currMonth, 1))}
            />
            <Text mx={4} minW='124px' textAlign='center'>
              {format(currMonth, 'LLLL yyyy')}
            </Text>
            <IconButton
              ariaLabel='Toggle to next month'
              label='Toggle to next month'
              variant='ghost'
              icon={<MdChevronRight />}
              onClick={() => setCurrMonth(addMonths(currMonth, 1))}
            />
          </Box>
          <Spacer />
          <Box>
            Total: <strong>{formatCurrency(transactions?.total)}</strong>
          </Box>
        </Flex>
        <Box my={4}>
          {transactions?.data.length > 0 ? (
            <Table variant='striped'>
              <Thead>
                <Tr>
                  <Th w='20px' />
                  <Th>Date</Th>
                  <Th>Category</Th>
                  <Th maxW='350px'>Description</Th>
                  <Th isNumeric>Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                {transactions?.data.map((transaction) => (
                  <TransactionRow key={transaction.id} data={transaction} />
                ))}
              </Tbody>
            </Table>
          ) : (
            <Heading textAlign='center' my='20' textColor='gray.400'>
              No Transactions for this month
            </Heading>
          )}
        </Box>
      </PageLayout>
      <Route exact path='/transactions/:id'>
        <TransactionItem />
      </Route>
    </>
  )
}

export default Transactions
