import React from 'react'
import { Tr, Td, useDisclosure, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import { MdEdit } from 'react-icons/md'
import PropTypes from 'prop-types'
import IconButton from '../../components/IconButton'
import ColorIcon from '../../components/color-swatch/ColorIcon'

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
        <Menu>
          <MenuButton as='div'>
            <ColorIcon color={data.label} />
          </MenuButton>
          <MenuList p={4}>
            <ColorIcon color='yellow' />
          </MenuList>
        </Menu>
      </Td>
      <Td>{data.name}</Td>
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

CategoryRow.propTypes = {
  data: PropTypes.object,
}

export default CategoryRow
