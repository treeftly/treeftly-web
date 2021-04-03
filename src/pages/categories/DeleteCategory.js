import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from '@chakra-ui/modal'
import { Button } from '@chakra-ui/button'
import { deleteCategory, key } from '../../services/categories'
import { useMutate } from '../../utils/hooks'

const DeleteCategory = ({ isOpen, onClose, data }) => {
  const ref = useRef()
  const { mutate } = useMutate({
    mutateFn: deleteCategory,
    key,
    successMsg: 'Successfully deleted category!',
    failureMsg: 'Failed to delete category',
  })

  return (
    <AlertDialog isOpen={isOpen} onClose={onClose} leastDestructiveRef={ref}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Delete Category
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            This will remove all transactions attached to this category. Are you sure you want to
            delete category <strong>{data.name}</strong>?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={onClose} ref={ref}>
              Cancel
            </Button>
            <Button colorScheme='red' onClick={() => mutate(data.id)} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

DeleteCategory.propTypes = {
  data: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
}

export default DeleteCategory
