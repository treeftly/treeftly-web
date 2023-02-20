// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';

// @ts-expect-error TS(6142): Module '../../components/modals/DeleteModal' was r... Remove this comment to see the full error message
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <DeleteModal
      isOpen={isOpen}
      onClose={onClose}
      onDelete={() => mutate(data.id)}
      header="Delete Category"
    >
      This will remove all transactions attached to this category. Are you sure
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any'
      because no i... Remove this comment to see the full error message you want
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
