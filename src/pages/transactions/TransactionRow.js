import React from 'react'
import { format } from 'date-fns'
import { Tr, Td } from '@chakra-ui/table'
import PropTypes from 'prop-types'
import { Text } from '@chakra-ui/layout'
import { useHistory } from 'react-router'
import { MdClose } from 'react-icons/md'
import ColorIcon from '../../components/color-swatch/ColorIcon'
import IconButton from '../../components/IconButton'

const TransactionRow = ({ data }) => {
  const history = useHistory()

  return (
    <Tr pos='relative' cursor='pointer' onClick={() => history.push(`/transactions/${data.id}`)}>
      <Td>
        <IconButton
          icon={<MdClose />}
          fontSize='14px'
          variant='ghost'
          size='xs'
          ariaLabel='Delete transaction'
          label='Delete transaction'
        />
      </Td>
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
