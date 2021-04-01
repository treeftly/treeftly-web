import { Box, Flex, Spacer, Text } from '@chakra-ui/layout'
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table'
import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { useQuery } from 'react-query'
import { format } from 'date-fns'
import ColorIcon from '../../components/color-swatch/ColorIcon'
import IconButton from '../../components/IconButton'
import PageLayout from '../../components/layouts/PageLayout'
import PageHeader from '../../components/PageHeader'
import { listTransactions, key } from '../../services/transactions'

const Transactions = () => {
  const { data: transactions } = useQuery(key, listTransactions)
  console.log('transactions', transactions)

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
            />
            <Text mx={4}>April</Text>
            <IconButton
              ariaLabel='Toggle to next month'
              label='Toggle to next month'
              variant='ghost'
              icon={<MdChevronRight />}
            />
          </Box>
          <Spacer />
          <Box>
            Total: <strong>$900</strong>
          </Box>
        </Flex>
        <Box my={4}>
          <Table variant='striped'>
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Category</Th>
                <Th maxW='350px'>Description</Th>
                <Th isNumeric>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions?.data.map((transaction) => (
                <Tr key={transaction.id}>
                  <Td>{format(new Date(transaction.date), 'LLL dd, yyyy')}</Td>
                  <Td>
                    <ColorIcon color={transaction?.['category.label']} />
                    {transaction?.['category.name']}
                  </Td>
                  <Td isTruncated maxW='350px'>
                    <Text isTruncated>{transaction.description}</Text>
                  </Td>
                  <Td isNumeric>
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                      transaction.amount
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </PageLayout>
    </>
  )
}

export default Transactions
