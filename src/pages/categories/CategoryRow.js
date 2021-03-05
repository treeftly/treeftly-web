import React from 'react'
import { Tr, Td, useDisclosure } from '@chakra-ui/react'
import { MdEdit } from 'react-icons/md'
import IconButton from '../../components/IconButton'
import ColorIcon from '../../components/color-swatch/ColorIcon'

const CategoryRow = () => {
  const { isOpen: isHovered, onOpen: onMouseEnter, onClose: onMouseLeave } = useDisclosure()

  return (
    <Tr
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => console.log('edit')}
      cursor='pointer'
    >
      <Td>
        <ColorIcon color='yellow' />
      </Td>
      <Td>Food</Td>
      <Td>
        <IconButton
          opacity={isHovered ? '1' : '0'}
          label='Edit Category'
          ariaLabel='Edit category'
          icon={<MdEdit />}
          variant='ghost'
          fontSize='20px'
        />
      </Td>
    </Tr>
  )
}

export default CategoryRow
