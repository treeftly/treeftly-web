import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/number-input'
import { Textarea } from '@chakra-ui/textarea'
import Select from 'react-select'
import FormModal from '../modals/FormModal'
import FormComponent from '../FormComponent'
import DatePicker from '../DatePicker'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const TransactionModal = ({ isOpen, onClose }) => {
  const { register, errors } = useForm()
  return (
    <FormModal isOpen={isOpen} onClose={onClose} onSubmit={() => {}} header='New transaction'>
      <FormComponent id='date' label='Date' errors={errors}>
        <DatePicker ref={register} name='date' />
      </FormComponent>
      <FormComponent id='category' label='Category' errors={errors}>
        <Select options={options} />
      </FormComponent>
      <FormComponent id='amount' label='Amount' errors={errors}>
        <NumberInput>
          <NumberInputField ref={register} name='amount' />
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
