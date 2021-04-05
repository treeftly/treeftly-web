import { Button } from '@chakra-ui/button'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from '@chakra-ui/modal'
import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const DeleteModal = ({ header, isOpen, onClose, onDelete, children }) => {
  const ref = useRef()
  return (
    <AlertDialog isOpen={isOpen} onClose={onClose} leastDestructiveRef={ref} isCentered>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            {header}
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>{children}</AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={onClose} ref={ref}>
              Cancel
            </Button>
            <Button colorScheme='red' onClick={onDelete} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

DeleteModal.propTypes = {
  header: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default DeleteModal
