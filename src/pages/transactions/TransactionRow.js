import React from 'react'
import { format } from 'date-fns'
import { Tr, Td } from '@chakra-ui/table'
import PropTypes from 'prop-types'
import { Text } from '@chakra-ui/layout'
import { useHistory } from 'react-router'
import { MdClose } from 'react-icons/md'
import { useDisclosure } from '@chakra-ui/hooks'
import ColorIcon from '../../components/color-swatch/ColorIcon'
import IconButton from '../../components/IconButton'
import DeleteTransaction from './DeleteTransaction'
import { formatCurrency } from '../../utils/functions'

const TransactionRow = ({ data }) => {
  const history = useHistory()
  const { isOpen, onClose, onOpen } = useDisclosure()

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
          onClick={(evt) => {
            evt.stopPropagation()
            onOpen()
          }}
        />
        <DeleteTransaction data={data} isOpen={isOpen} onClose={onClose} />
      </Td>
      <Td>{format(new Date(data.date), 'LLL dd, yyyy')}</Td>
      <Td>
        <ColorIcon color={data?.['category.label']} />
        {data?.['category.name']}
      </Td>
      <Td isTruncated maxW='350px'>
        <Text isTruncated>{data.description}</Text>
      </Td>
      <Td isNumeric>{formatCurrency(data.amount)}</Td>
    </Tr>
  )
}

TransactionRow.propTypes = {
  data: PropTypes.object.isRequired,
}
export default TransactionRow
