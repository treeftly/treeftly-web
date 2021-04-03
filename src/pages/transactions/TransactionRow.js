import React from 'react'
import { format } from 'date-fns'
import { Tr, Td } from '@chakra-ui/table'
import PropTypes from 'prop-types'
import { Text } from '@chakra-ui/layout'
import { useHistory } from 'react-router'
import ColorIcon from '../../components/color-swatch/ColorIcon'

const TransactionRow = ({ data }) => {
  const history = useHistory()

  return (
    <Tr pos='relative' cursor='pointer' onClick={() => history.push(`/transactions/${data.id}`)}>
      <Td>{format(new Date(data.date), 'LLL dd, yyyy')}</Td>
      <Td>
        <ColorIcon color={data?.['category.label']} />
        {data?.['category.name']}
      </Td>
      <Td isTruncated maxW='350px'>
        <Text isTruncated>{data.description}</Text>
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
