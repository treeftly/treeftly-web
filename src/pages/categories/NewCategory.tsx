import { Grid, Input } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import ColorSwatch from "../../components/color-swatch/ColorSwatch";
import FormComponent from "../../components/FormComponent";
import FormModal from "../../components/modals/FormModal";
import { createCategory, key } from "../../services/categories";
import { noop } from "../../utils/functions";
import { useMutate } from "../../utils/hooks";

const NewCategory = ({ isOpen = false, onClose = noop }) => {
  const { register, handleSubmit, control, setValue } = useForm({
    defaultValues: { label: "#CBD5E0", name: "" },
  });
  const { mutate } = useMutate({
    mutateFn: createCategory,
    key,
    successMsg: "Category created!",
    failureMsg: "Failed to create category.",
    onSettled: onClose,
  });

  return (
    <FormModal
      isOpen={isOpen}
      header="New category"
      onSubmit={handleSubmit(mutate)}
      onClose={onClose}
    >
      <Grid templateColumns="auto 1fr">
        <FormComponent id="label" isRequired label="Label">
          <Controller
            control={control}
            name="label"
            render={({ value }) => (
              <ColorSwatch
                selected={value}
                onSelect={(color) => setValue("label", color)}
              />
            )}
          />
        </FormComponent>
        <FormComponent id="name" isRequired label="Name">
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
