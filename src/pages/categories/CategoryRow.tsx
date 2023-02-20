import { Box, Input, Td, Tr, useDisclosure } from '@chakra-ui/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { useEffect, useState } from 'react';

// @ts-expect-error TS(6142): Module '../../components/color-swatch/ColorIcon' w... Remove this comment to see the full error message
import ColorIcon from '../../components/color-swatch/ColorIcon';
// @ts-expect-error TS(6142): Module '../../components/color-swatch/ColorSwatch'... Remove this comment to see the full error message
import ColorSwatch from '../../components/color-swatch/ColorSwatch';
import { key, updateCategory } from '../../services/categories';
import { useMutate } from '../../utils/hooks';
// @ts-expect-error TS(6142): Module './CategoryButtons' was resolved to '/Users... Remove this comment to see the full error message
import CategoryButtons from './CategoryButtons';
// @ts-expect-error TS(6142): Module './DeleteCategory' was resolved to '/Users/... Remove this comment to see the full error message
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
    // @ts-expect-error TS(2345): Argument of type '{ id: any; name: any; label: any... Remove this comment to see the full error message
    mutate({ id: data.id, name: nameValue, label: labelValue });
  };

  useEffect(() => {
    setLabelValue(data.label);
    setNameValue(data.name);
  }, [data]);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Tr
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      cursor="pointer"
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Td>
        {data.userId && isEditing ? (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ColorSwatch selected={labelValue} onSelect={setLabelValue} />
        ) : (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ColorIcon color={data.label} />
        )}
      </Td>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Td>
        {isEditing ? (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Input
            value={nameValue}
            onChange={(evt: any) => setNameValue(evt.target.value)}
            autoFocus
          />
        ) : (
          data.name
        )}
      </Td>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Td>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Box display="flex">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <CategoryButtons
            isEditing={isEditing}
            isHovered={isHovered}
            data={data}
            onDelete={onDeleteOpen}
            onEdit={onEdit}
            onEditCancel={onCancel}
            onSave={onSave}
          />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
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
