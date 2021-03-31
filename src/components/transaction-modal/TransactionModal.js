import React from 'react'
import PropTypes from 'prop-types'
import { useForm, Controller } from 'react-hook-form'
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/number-input'
import { Textarea } from '@chakra-ui/textarea'
import FormModal from '../modals/FormModal'
import FormComponent from '../FormComponent'
import DatePicker from '../DatePicker'
import Select from '../Select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const TransactionModal = ({ isOpen, onClose }) => {
  const { control, register, errors, handleSubmit } = useForm({
    defaultValues: {
      date: new Date(),
      category: options[1],
    },
  })
  const onSubmit = (data) => {
    console.info('data', data)
  }

  return (
    <FormModal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      header='New transaction'
    >
      <FormComponent id='date' label='Date' errors={errors}>
        <Controller
          name='date'
          control={control}
          render={({ onChange, value }) => (
            <DatePicker
              dateFormat='yyyy-MM-dd'
              selected={value}
              onChange={(date) => onChange(date)}
            />
          )}
        />
      </FormComponent>
      <FormComponent id='category' label='Category' errors={errors}>
        <Controller
          name='category'
          control={control}
          render={({ value, onChange }) => (
            <Select options={options} value={value} onChange={(selected) => onChange(selected)} />
          )}
        />
      </FormComponent>
      <FormComponent id='amount' label='Amount' errors={errors}>
        <NumberInput>
          <NumberInputField ref={register} name='amount' autoFocus />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormComponent>
      <FormComponent id='description' label='Description' errors={errors}>
        <Textarea placeholder='Cab home from the office' ref={register} name='description' />
      </FormComponent>
    </FormModal>
  )
}

TransactionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default TransactionModal
