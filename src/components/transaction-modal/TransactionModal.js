import React, { useContext } from 'react'
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
import { CategoriesContext } from '../../services/categories'
import { createTransaction, key } from '../../services/transactions'
import { useMutate } from '../../utils/hooks'

const addDots = (defaultStyle, { data }) => ({
  ...defaultStyle,
  alignItems: 'center',
  display: 'flex',
  paddingTop: '6px',
  paddingBottom: '6px',

  ':before': {
    backgroundColor: data?.label || '#FFF',
    borderRadius: 15,
    content: '" "',
    display: 'block',
    marginRight: 4,
    height: 15,
    width: 15,
  },
})

const styles = {
  input: addDots,
  placeholder: addDots,
  singleValue: addDots,
  option: addDots,
}

const TransactionModal = ({ isOpen, onClose }) => {
  const categories = useContext(CategoriesContext)
  const { control, register, errors, handleSubmit } = useForm({
    defaultValues: {
      date: new Date(),
      categoryId: '',
    },
  })
  const { mutate } = useMutate({
    mutateFn: createTransaction,
    key,
    successMsg: 'Successfully created transaction!',
    failureMsg: 'Error creating transaction',
    onSettled: onClose,
  })

  const onSubmit = (data) => {
    const payload = { ...data, amount: parseFloat(data.amount), categoryId: data.categoryId.id }
    mutate(payload)
  }

  return (
    <FormModal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      header='New transaction'
    >
      <FormComponent id='date' label='Date' isRequired errors={errors}>
        <Controller
          name='date'
          control={control}
          rules={{ required: 'date is required' }}
          render={({ onChange, value }) => (
            <DatePicker
              dateFormat='yyyy-MM-dd'
              selected={value}
              onChange={(date) => onChange(date)}
            />
          )}
        />
      </FormComponent>
      <FormComponent id='categoryId' label='Category' isRequired errors={errors}>
        <Controller
          name='categoryId'
          control={control}
          rules={{ required: 'category is required' }}
          render={({ value, onChange }) => (
            <Select
              placeholder='Select category'
              options={categories?.data}
              value={value}
              onChange={(selected) => onChange(selected)}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              styles={styles}
            />
          )}
        />
      </FormComponent>
      <FormComponent id='amount' label='Amount' isRequired errors={errors}>
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
