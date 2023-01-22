import React from 'react'
import { format } from 'date-fns'
import { Tr, Td } from '@chakra-ui/table'
import PropTypes from 'prop-types'
import { Text } from '@chakra-ui/layout'
import { useHistory } from 'react-router-dom'
import { MdClose } from 'react-icons/md'
import { useDisclosure } from '@chakra-ui/hooks'
import { useBreakpointValue } from '@chakra-ui/media-query'
import ColorIcon from '../../components/color-swatch/ColorIcon'
import IconButton from '../../components/IconButton'
import DeleteTransaction from './DeleteTransaction'
import { formatCurrency } from '../../utils/functions'

const TransactionRow = ({ data }) => {
  const history = useHistory()
  const { isOpen, onClose, onOpen } = useDisclosure()
  const dateColumn = useBreakpointValue({
    base: (
      <Td>
        <ColorIcon color={data?.['category.label']} label={data?.['category.name']} />
        {format(new Date(data.date), 'LLL dd, yyyy')}
      </Td>
    ),
    md: <Td>{format(new Date(data.date), 'LLL dd, yyyy')}</Td>,
  })
  const categoryColumn = useBreakpointValue({
    base: null,
    md: (
      <Td>
        <ColorIcon color={data?.['category.label']} label={data?.['category.name']} />
        {data?.['category.name']}
      </Td>
    ),
  })
  const descriptionColumn = useBreakpointValue({
    base: null,
    lg: (
      <Td isTruncated maxW='350px'>
        <Text isTruncated>{data.description}</Text>
      </Td>
    ),
  })

  return (
    <Tr pos='relative' cursor='pointer' onClick={() => history.push(`/transactions/${data.id}`)}>
      <Td>
        <IconButton
          icon={<MdClose />}
          fontSize={{ base: '12px', lg: '14px' }}
          variant='ghost'
          ariaLabel='Delete transaction'
          label='Delete transaction'
          size={{ base: 'sm', lg: 'md' }}
          onClick={(evt) => {
            evt.stopPropagation()
            onOpen()
          }}
        />
        <DeleteTransaction data={data} isOpen={isOpen} onClose={onClose} />
      </Td>
      {dateColumn}
      {categoryColumn}
      {descriptionColumn}
      <Td isNumeric>{formatCurrency(data.amount)}</Td>
    </Tr>
  )
}

TransactionRow.propTypes = {
  data: PropTypes.object.isRequired,
}
export default TransactionRow
