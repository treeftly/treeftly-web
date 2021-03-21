import React, { useEffect, useState } from 'react'
import { Tr, Td, useDisclosure, Box, Input } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { useMutation, useQueryClient } from 'react-query'
import ColorSwatch from '../../components/color-swatch/ColorSwatch'
import ColorIcon from '../../components/color-swatch/ColorIcon'
import DeleteCategory from './DeleteCategory'
import CategoryButtons from './CategoryButtons'
import useToast from '../../utils/toast'
import { updateCategory } from '../../services/categories'
import logger from '../../utils/logger'

const CategoryRow = ({ data }) => {
  const { isOpen: isHovered, onOpen: onMouseEnter, onClose: onMouseLeave } = useDisclosure()
  const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure()
  const { isOpen: isEditing, onOpen: onEdit, onClose: onEditCancel } = useDisclosure()
  const [labelValue, setLabelValue] = useState(data.label)
  const [nameValue, setNameValue] = useState(data.name)
  const queryClient = useQueryClient()
  const toast = useToast()
  const { mutate } = useMutation(updateCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries('categories')
      toast({
        title: 'Category updated!',
        status: 'success',
      })
    },
    onError: (err) => {
      toast({
        title: 'Failed to update category',
        status: 'error',
      })
      logger.error('Error update new category', JSON.stringify(err))
    },
    onSettled: () => {
      onEditCancel()
    },
  })

  const onCancel = () => {
    setLabelValue(data.label)
    setNameValue(data.name)
    onEditCancel()
  }

  const onSave = () => {
    mutate({ id: data.id, name: nameValue, label: labelValue })
  }

  useEffect(() => {
    setLabelValue(data.label)
    setNameValue(data.name)
  }, [data])

  return (
    <>
      <Tr onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} cursor='pointer'>
        <Td>
          {data.userId && isEditing ? (
            <ColorSwatch selected={labelValue} onSelect={setLabelValue} />
          ) : (
            <ColorIcon color={data.label} />
          )}
        </Td>
        <Td>
          {isEditing ? (
            <Input value={nameValue} onChange={(evt) => setNameValue(evt.target.value)} autoFocus />
          ) : (
            data.name
          )}
        </Td>
        <Td>
          <Box display='flex'>
            <CategoryButtons
              isEditing={isEditing}
              isHovered={isHovered}
              data={data}
              onDelete={onDeleteOpen}
              onEdit={onEdit}
              onEditCancel={onCancel}
              onSave={onSave}
            />
          </Box>
        </Td>
      </Tr>
      <DeleteCategory isOpen={isDeleteOpen} onClose={onDeleteClose} data={data} />
    </>
  )
}

CategoryRow.propTypes = {
  data: PropTypes.object,
}

export default CategoryRow
