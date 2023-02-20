import { Grid, Input } from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

// @ts-expect-error TS(6142): Module '../../components/color-swatch/ColorSwatch'... Remove this comment to see the full error message
import ColorSwatch from '../../components/color-swatch/ColorSwatch';
// @ts-expect-error TS(6142): Module '../../components/FormComponent' was resolv... Remove this comment to see the full error message
import FormComponent from '../../components/FormComponent';
// @ts-expect-error TS(6142): Module '../../components/modals/FormModal' was res... Remove this comment to see the full error message
import FormModal from '../../components/modals/FormModal';
import { createCategory, key } from '../../services/categories';
import { noop } from '../../utils/functions';
import { useMutate } from '../../utils/hooks';

const NewCategory = ({ isOpen = false, onClose = noop }) => {
  const { register, handleSubmit, control, setValue } = useForm({
    defaultValues: { label: '#CBD5E0', name: '' },
  });
  const { mutate } = useMutate({
    mutateFn: createCategory,
    key,
    successMsg: 'Category created!',
    failureMsg: 'Failed to create category.',
    onSettled: onClose,
  });

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <FormModal
      isOpen={isOpen}
      header="New category"
      // @ts-expect-error TS(2345): Argument of type 'UseMutateFunction<unknown, unkno... Remove this comment to see the full error message
      onSubmit={handleSubmit(mutate)}
      onClose={onClose}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Grid templateColumns="auto 1fr">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <FormComponent id="label" isRequired label="Label">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <Controller
            control={control}
            name="label"
            render={({ value }) => (
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <ColorSwatch
                selected={value}
                // @ts-expect-error TS(2322): Type '(color: any) => void' is not assignable to t... Remove this comment to see the full error message
                onSelect={(color: any) => setValue('label', color)}
              />
            )}
          />
        </FormComponent>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <FormComponent id="name" isRequired label="Name">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <Input
            placeholder="Online courses"
            autoFocus
            ref={register}
            name="name"
          />
        </FormComponent>
      </Grid>
    </FormModal>
  );
};

NewCategory.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};
export default NewCategory;
