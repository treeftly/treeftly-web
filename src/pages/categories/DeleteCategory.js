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
import { Button } from '@chakra-ui/button'
import { deleteCategory, key } from '../../services/categories'
import { useMutate } from '../../utils/hooks'

const DeleteCategory = ({ isOpen, onClose, data }) => {
  const { mutate } = useMutate({
    mutateFn: deleteCategory,
    key,
    successMsg: 'Successfully deleted category!',
    failureMsg: 'Failed to delete category',
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
