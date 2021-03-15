import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Grid,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { Controller, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import ColorSwatch from '../../components/color-swatch/ColorSwatch'
import FormComponent from '../../components/FormComponent'
import { createCategory } from '../../services/categories'

const NewCategory = ({ isOpen = false, onClose = () => {} }) => {
  const queryClient = useQueryClient()
  const { register, handleSubmit, control, setValue } = useForm({
    defaultValues: { label: '#CBD5E0', name: '' },
  })
  const { mutate } = useMutation(createCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries('categories')
    },
    onSettled: () => {
      onClose()
    },
  })

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <form onSubmit={handleSubmit(mutate)}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>New Category</ModalHeader>
          <ModalBody>
            <Grid templateColumns='auto 1fr'>
              <FormComponent id='label' isRequired label='Label'>
                <Controller
                  control={control}
                  name='label'
                  render={({ value }) => (
                    <ColorSwatch selected={value} onSelect={(color) => setValue('label', color)} />
                  )}
                />
              </FormComponent>
              <FormComponent id='name' isRequired label='Name'>
                <Input placeholder='Online courses' autoFocus ref={register} name='name' />
              </FormComponent>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
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

NewCategory.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
}
export default NewCategory
