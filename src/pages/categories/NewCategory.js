import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Input } from '@chakra-ui/react'
import { Controller, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import ColorSwatch from '../../components/color-swatch/ColorSwatch'
import FormComponent from '../../components/FormComponent'
import { createCategory } from '../../services/categories'
import useToast from '../../utils/toast'
import logger from '../../utils/logger'
import FormModal from '../../components/modals/FormModal'

const NewCategory = ({ isOpen = false, onClose = () => {} }) => {
  const queryClient = useQueryClient()
  const toast = useToast()
  const { register, handleSubmit, control, setValue } = useForm({
    defaultValues: { label: '#CBD5E0', name: '' },
  })
  const { mutate } = useMutation(createCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries('categories')
      toast({
        title: 'Category created!',
        status: 'success',
      })
    },
    onError: (err) => {
      toast({
        title: 'Failed to create category',
        status: 'error',
      })
      logger.error('Error creating new category', JSON.stringify(err))
    },
    onSettled: () => {
      onClose()
    },
  })

  return (
    <FormModal
      isOpen={isOpen}
      header='New category'
      onSubmit={handleSubmit(mutate)}
      onClose={onClose}
    >
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
    </FormModal>
  )
}

NewCategory.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
}
export default NewCategory
