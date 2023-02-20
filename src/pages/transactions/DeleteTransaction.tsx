// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';

// @ts-expect-error TS(6142): Module '../../components/modals/DeleteModal' was r... Remove this comment to see the full error message
import DeleteModal from '../../components/modals/DeleteModal';
import { deleteTransaction, key } from '../../services/transactions';
import { formatCurrency } from '../../utils/functions';
import { useMutate } from '../../utils/hooks';

const DeleteTransaction = ({ data, isOpen, onClose }: any) => {
  const { mutate } = useMutate({
    mutateFn: deleteTransaction,
    key,
    successMsg: 'Successfully deleted transaction',
    failureMsg: 'Failed to delete transaction',
  });

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <DeleteModal
      header="Delete Transaction"
      isOpen={isOpen}
      onClose={onClose}
      onDelete={() => mutate(data.id)}
    >
      Are you sure you want to delete this transaction with amount //
      @ts-expect-error TS(7026): JSX element implicitly has type 'any' because
      no i... Remove this comment to see the full error message
      <strong>{formatCurrency(data.amount)}</strong>?
    </DeleteModal>
  );
};

DeleteTransaction.propTypes = {
  data: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DeleteTransaction;
