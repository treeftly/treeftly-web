import React from 'react'
import { format } from 'date-fns'
import { Tr, Td } from '@chakra-ui/table'
import PropTypes from 'prop-types'
import { Box, Text } from '@chakra-ui/layout'
import ColorIcon from '../../components/color-swatch/ColorIcon'

const TransactionRow = ({ data }) => {
  return (
    <Tr pos='relative'>
      <Td>{format(new Date(data.date), 'LLL dd, yyyy')}</Td>
      <Td>
        <ColorIcon color={data?.['category.label']} />
        {data?.['category.name']}
      </Td>
      <Td isTruncated maxW='350px'>
        <Text isTruncated>{data.description}</Text>
        <Box pos='absolute' w='100%' h='100%' display='flex' alignItems='center' right='0' top='0'>
          <Box ml='auto'>Meow</Box>
        </Box>
      </Td>
      <Td isNumeric>
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.amount)}
      </Td>
    </Tr>
  )
}

TransactionRow.propTypes = {
  data: PropTypes.object.isRequired,
}
export default TransactionRow
