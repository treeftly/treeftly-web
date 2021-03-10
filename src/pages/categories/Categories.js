import { Box, Button, Heading, Table, Tbody, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import Container from '../../components/layouts/Container'
import { listCategories } from '../../services/categories'
import CategoryRow from './CategoryRow'
import NewCategory from './NewCategory'

const Categories = () => {
  const { data: response } = useQuery('categories', listCategories)
  const { onOpen, isOpen, onClose } = useDisclosure()

  return (
    <>
      <Container py={3}>
        <Heading size='lg'>Categories</Heading>
      </Container>
      <Container
        border='1px'
        borderColor='gray.200'
        borderRadius='base'
        boxShadow='md'
        w='100%'
        px='6'
        py='4'
        bg='white'
        height='maxContent'
        mb={3}
      >
        <Button colorScheme='primary' onClick={onOpen}>
          Create New Category
        </Button>
        <Box mt={10}>
          <Table>
            <Thead>
              <Tr>
                <Th w='20px'>Label</Th>
                <Th>Name</Th>
                <Th w='20px' />
              </Tr>
            </Thead>
            <Tbody>
              {response?.data.map((category) => (
                <CategoryRow data={category} key={category.id} />
              ))}
            </Tbody>
          </Table>
        </Box>
      </Container>
      <NewCategory isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Categories
