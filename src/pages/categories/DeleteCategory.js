import React from 'react'
import PropTypes from 'prop-types'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal'
import { useMutation, useQueryClient } from 'react-query'
import { Button } from '@chakra-ui/button'
import { deleteCategory } from '../../services/categories'
import useToast from '../../utils/toast'
import logger from '../../utils/logger'

const DeleteCategory = ({ isOpen, onClose, data }) => {
  const queryClient = useQueryClient()
  const toast = useToast()
  const { mutate } = useMutation(deleteCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries('categories')
      toast({
        title: 'Successfully deleted category',
        status: 'success',
      })
    },
    onError: (err) => {
      toast({ title: 'Failed to delete category', status: 'error' })
      logger.error('Error deleting category', JSON.stringify(err))
    },
  })

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>Delete Category</ModalHeader>
        <ModalBody>
          Are you sure you want to delete category <strong>{data.name}</strong>?
        </ModalBody>
        <ModalFooter>
          <Button variant='ghost' mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme='primary' onClick={() => mutate(data.id)}>
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

DeleteCategory.propTypes = {
  data: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
}

export default DeleteCategory
