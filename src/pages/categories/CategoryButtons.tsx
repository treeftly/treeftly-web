import PropTypes from 'prop-types';
import React from 'react';
import { MdClose, MdDelete, MdEdit, MdSave } from 'react-icons/md';

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
      <>
        <IconButton
          label="Save edit"
          ariaLabel="save edit"
          icon={<MdSave />}
          variant="ghost"
          fontSize="20px"
          onClick={onSave}
        />
        <IconButton
          label="Cancel edit"
          ariaLabel="cancel edit"
          icon={<MdClose />}
          variant="ghost"
          fontSize="20px"
          onClick={onEditCancel}
        />
      </>
    );
  }

  return (
    <>
      <IconButton
        opacity={isHovered ? '1' : '0'}
        label="Edit Category"
        ariaLabel="Edit category"
        icon={<MdEdit />}
        variant="ghost"
        fontSize="20px"
        onClick={onEdit}
      />
      <IconButton
        opacity={isHovered ? '1' : '0'}
        label="Delete Category"
        ariaLabel="Delete category"
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
