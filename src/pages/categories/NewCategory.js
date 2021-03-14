import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import ColorSwatch from '../../components/color-swatch/ColorSwatch'

const defaultColor = '#CBD5E0'

const NewCategory = ({ isOpen = false, onClose = () => {} }) => {
  const [selectedColor, setSelectedColor] = useState(defaultColor)
  const [name, setName] = useState('')

  const onModalClose = () => {
    onClose()
    setName('')
    setSelectedColor(defaultColor)
  }

  return (
    <Modal isOpen={isOpen} onClose={onModalClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>New Category</ModalHeader>
        <ModalBody>
          <Table>
            <Thead>
              <Tr>
                <Th w='20px'>Label</Th>
                <Th>Name</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <ColorSwatch selected={selectedColor} onSelect={setSelectedColor} />
                </Td>
                <Td>
                  <Input
                    placeholder='Online courses'
                    value={name}
                    onChange={(evt) => setName(evt.target.value)}
                    autoFocus
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          <Button variant='ghost' mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme='primary'>Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

NewCategory.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
}
export default NewCategory
