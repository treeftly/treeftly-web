import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Textarea,
} from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useContext, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { CategoriesContext } from '../../services/categories';
// @ts-expect-error TS(6142): Module '../DatePicker' was resolved to '/Users/mat... Remove this comment to see the full error message
import DatePicker from '../DatePicker';
// @ts-expect-error TS(6142): Module '../FormComponent' was resolved to '/Users/... Remove this comment to see the full error message
import FormComponent from '../FormComponent';
// @ts-expect-error TS(6142): Module '../modals/FormModal' was resolved to '/Use... Remove this comment to see the full error message
import FormModal from '../modals/FormModal';
// @ts-expect-error TS(6142): Module '../Select' was resolved to '/Users/matthew... Remove this comment to see the full error message
import Select from '../Select';

// @ts-expect-error TS(7006): Parameter 'defaultStyle' implicitly has an 'any' t... Remove this comment to see the full error message
const addDots = (defaultStyle, { data }: any) => ({
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
});

const styles = {
  input: addDots,
  placeholder: addDots,
  singleValue: addDots,
  option: addDots,
};

const TransactionModal = ({ isOpen, onClose, values, mutate }: any) => {
  const categories = useContext(CategoriesContext);
  const defaultAmount = parseFloat(values?.amount || 0);
  const { control, register, errors, handleSubmit, setValue } = useForm({
    defaultValues: {
      date: new Date(),
      categoryId: '',
      amount: defaultAmount === 0 ? undefined : defaultAmount,
      description: values?.description,
    },
  });

  const onSubmit = (data: any) => {
    const payload = {
      ...data,
      amount: parseFloat(data.amount),
      categoryId: data.categoryId.id,
    };
    mutate(payload);
  };

  useEffect(() => {
    if (values?.id) {
      setValue('amount', parseFloat(values.amount));
      setValue('description', values?.description);
      setValue('date', new Date(values.date));
      setValue('categoryId', {
        id: values['category.id'],
        name: values['category.name'],
        label: values['category.label'],
      });
    }
  }, [values]);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <FormModal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      header="New transaction"
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <FormComponent id="date" label="Date" isRequired errors={errors}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Controller
          name="date"
          control={control}
          rules={{ required: 'date is required' }}
          render={({ onChange, value }) => (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <DatePicker
              dateFormat="yyyy-MM-dd"
              selected={value}
              onChange={onChange}
            />
          )}
        />
      </FormComponent>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <FormComponent
        id="categoryId"
        label="Category"
        isRequired
        errors={errors}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Controller
          name="categoryId"
          control={control}
          rules={{ required: 'category is required' }}
          render={({ value, onChange }) => (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Select
              placeholder="Select category"
              options={categories?.data}
              value={value}
              onChange={(selected: any) => onChange(selected)}
              getOptionLabel={(option: any) => option.name}
              getOptionValue={(option: any) => option.id}
              styles={styles}
            />
          )}
        />
      </FormComponent>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <FormComponent id="amount" label="Amount" isRequired errors={errors}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Controller
          name="amount"
          control={control}
          render={({ value, onChange }) => (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <NumberInput
              ref={register}
              name="amount"
              value={value}
              onChange={onChange}
            >
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
              flag is provided... Remove this comment to see the full error
              message
              <NumberInputField autoFocus />
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
              flag is provided... Remove this comment to see the full error
              message
              <NumberInputStepper>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                flag is provided... Remove this comment to see the full error
                message
                <NumberIncrementStepper />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                flag is provided... Remove this comment to see the full error
                message
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          )}
        />
      </FormComponent>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <FormComponent id="description" label="Description" errors={errors}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Textarea
          placeholder="Cab home from the office"
          ref={register}
          name="description"
        />
      </FormComponent>
    </FormModal>
  );
};

TransactionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  mutate: PropTypes.func.isRequired,
  values: PropTypes.object,
};

export default TransactionModal;
