import { Box, Input, Td, Tr, useDisclosure } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import ColorIcon from '../../components/color-swatch/ColorIcon';
import ColorSwatch from '../../components/color-swatch/ColorSwatch';
import { key, updateCategory } from '../../services/categories';
import { useMutate } from '../../utils/hooks';
import CategoryButtons from './CategoryButtons';
import DeleteCategory from './DeleteCategory';

const CategoryRow = ({ data }: any) => {
  const {
    isOpen: isHovered,
    onOpen: onMouseEnter,
    onClose: onMouseLeave,
  } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const {
    isOpen: isEditing,
    onOpen: onEdit,
    onClose: onEditCancel,
  } = useDisclosure();
  const [labelValue, setLabelValue] = useState(data.label);
  const [nameValue, setNameValue] = useState(data.name);
  const { mutate } = useMutate({
    mutateFn: updateCategory,
    key,
    successMsg: 'Category updated!',
    failureMsg: 'Failed to update category',
    onSettled: onEditCancel,
  });

  const onCancel = () => {
    setLabelValue(data.label);
    setNameValue(data.name);
    onEditCancel();
  };

  const onSave = () => {
    mutate(data.id, { id: data.id, name: nameValue, label: labelValue });
  };

  useEffect(() => {
    setLabelValue(data.label);
    setNameValue(data.name);
  }, [data]);

  return (
    <Tr
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      cursor="pointer"
    >
      <Td>
        {data.userId && isEditing ? (
          <ColorSwatch selected={labelValue} onSelect={setLabelValue} />
        ) : (
          <ColorIcon color={data.label} />
        )}
      </Td>
      <Td>
        {isEditing ? (
          <Input
            value={nameValue}
            onChange={(evt: any) => setNameValue(evt.target.value)}
            autoFocus
          />
        ) : (
          data.name
        )}
      </Td>
      <Td>
        <Box display="flex">
          <CategoryButtons
            isEditing={isEditing}
            isHovered={isHovered}
            data={data}
            onDelete={onDeleteOpen}
            onEdit={onEdit}
            onEditCancel={onCancel}
            onSave={onSave}
          />
          <DeleteCategory
            isOpen={isDeleteOpen}
            onClose={onDeleteClose}
            data={data}
          />
        </Box>
      </Td>
    </Tr>
  );
};

CategoryRow.propTypes = {
  data: PropTypes.object,
};

export default CategoryRow;
