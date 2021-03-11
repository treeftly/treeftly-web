import React from 'react'
import { Tr, Td, useDisclosure } from '@chakra-ui/react'
import { MdEdit } from 'react-icons/md'
import PropTypes from 'prop-types'
import IconButton from '../../components/IconButton'
import ColorSwatch from '../../components/color-swatch/ColorSwatch'

const CategoryRow = ({ data }) => {
  const { isOpen: isHovered, onOpen: onMouseEnter, onClose: onMouseLeave } = useDisclosure()

  return (
    <Tr
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => console.info('edit')}
      cursor='pointer'
    >
      <Td>
        <ColorSwatch selected={data.label} />
      </Td>
      <Td>{data.name}</Td>
      <Td>
        {data.userId && (
          <IconButton
            opacity={isHovered ? '1' : '0'}
            label='Edit Category'
            ariaLabel='Edit category'
            icon={<MdEdit />}
            variant='ghost'
            fontSize='20px'
          />
        )}
      </Td>
    </Tr>
  )
}

CategoryRow.propTypes = {
  data: PropTypes.object,
}

export default CategoryRow
