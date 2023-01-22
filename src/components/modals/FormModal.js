import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
} from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'

const FormModal = ({ isOpen, header, onSubmit, onClose, children }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <form onSubmit={onSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>{header}</ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button variant='ghost' mr='3' onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='primary' type='submit'>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  )
}

FormModal.propTypes = {
  header: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default FormModal
