import PropTypes from 'prop-types';
import React from 'react';

import DeleteModal from '../../components/modals/DeleteModal';
import { deleteCategory, key } from '../../services/categories';
import { useMutate } from '../../utils/hooks';

const DeleteCategory = ({ isOpen, onClose, data }: any) => {
  const { mutate } = useMutate({
    mutateFn: deleteCategory,
    key,
    successMsg: 'Successfully deleted category!',
    failureMsg: 'Failed to delete category',
  });

  return (
    <DeleteModal
      isOpen={isOpen}
      onClose={onClose}
      onDelete={() => mutate(data.id)}
      header="Delete Category"
    >
      This will remove all transactions attached to this category. Are you sure
      to delete category <strong>{data.name}</strong>?
    </DeleteModal>
  );
};

DeleteCategory.propTypes = {
  data: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default DeleteCategory;
