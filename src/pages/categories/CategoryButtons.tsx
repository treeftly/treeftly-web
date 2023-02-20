// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { MdClose, MdDelete, MdEdit, MdSave } from 'react-icons/md';

// @ts-expect-error TS(6142): Module '../../components/IconButton' was resolved ... Remove this comment to see the full error message
import IconButton from '../../components/IconButton';

const CategoryButtons = ({
  isHovered,
  isEditing,
  data,
  onDelete,
  onEdit,
  onEditCancel,
  onSave,
}: any) => {
  if (!data.userId) {
    return null;
  }

  if (isEditing && data.userId) {
    return (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <IconButton
          label="Save edit"
          ariaLabel="save edit"
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          icon={<MdSave />}
          variant="ghost"
          fontSize="20px"
          onClick={onSave}
        />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <IconButton
          label="Cancel edit"
          ariaLabel="cancel edit"
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          icon={<MdClose />}
          variant="ghost"
          fontSize="20px"
          onClick={onEditCancel}
        />
      </>
    );
  }

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <IconButton
        opacity={isHovered ? '1' : '0'}
        label="Edit Category"
        ariaLabel="Edit category"
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        icon={<MdEdit />}
        variant="ghost"
        fontSize="20px"
        onClick={onEdit}
      />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <IconButton
        opacity={isHovered ? '1' : '0'}
        label="Delete Category"
        ariaLabel="Delete category"
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        icon={<MdDelete />}
        variant="ghost"
        fontSize="20px"
        onClick={onDelete}
      />
    </>
  );
};

CategoryButtons.propTypes = {
  isHovered: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onEditCancel: PropTypes.func,
  onSave: PropTypes.func,
};

export default CategoryButtons;
