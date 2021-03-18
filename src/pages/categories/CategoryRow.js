import React from 'react'
import { Tr, Td, useDisclosure, Box } from '@chakra-ui/react'
import { MdEdit, MdDelete } from 'react-icons/md'
import PropTypes from 'prop-types'
import { useMutation, useQueryClient } from 'react-query'
import IconButton from '../../components/IconButton'
import ColorSwatch from '../../components/color-swatch/ColorSwatch'
import ColorIcon from '../../components/color-swatch/ColorIcon'
import { deleteCategory } from '../../services/categories'

const CategoryRow = ({ data }) => {
  const queryClient = useQueryClient
  const { isOpen: isHovered, onOpen: onMouseEnter, onClose: onMouseLeave } = useDisclosure()
  const { mutate } = useMutation(deleteCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries('categories')
    },
  })
  // const { isOpen: isHovered } = useDisclosure()
  // const { isOpen: isEditing, onToggle } = useDisclosure()
  // console.log('isEditing', isEditing, data.name)

  return (
    <Tr
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => console.info('clicked ', data.name)}
      cursor='pointer'
    >
      {/* <Tr onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onToggle} cursor='pointer'> */}
      <Td>
        {data.userId ? <ColorSwatch selected={data.label} /> : <ColorIcon color={data.label} />}
      </Td>
      <Td>{data.name}</Td>
      <Td>
        {data.userId && (
          <Box display='flex'>
            <IconButton
              opacity={isHovered ? '1' : '0'}
              label='Edit Category'
              ariaLabel='Edit category'
              icon={<MdEdit />}
              variant='ghost'
              fontSize='20px'
            />
            <IconButton
              opacity={isHovered ? '1' : '0'}
              label='Delete Category'
              ariaLabel='Delete category'
              icon={<MdDelete />}
              variant='ghost'
              fontSize='20px'
              onClick={() => mutate(data.id)}
            />
          </Box>
        )}
      </Td>
    </Tr>
  )
}

CategoryRow.propTypes = {
  data: PropTypes.object,
}

export default CategoryRow
