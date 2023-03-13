import DeleteModal from '../../components/modals/DeleteModal';
import { deleteTransaction, key } from '../../services/transactions';
import { formatCurrency } from '../../utils/functions';
import { useMutate } from '../../utils/hooks';

type DeleteTransactionProps = {
  data: any;
  isOpen: boolean;
  onClose: () => void;
};

const DeleteTransaction = ({
  data,
  isOpen,
  onClose,
}: DeleteTransactionProps) => {
  const { mutate } = useMutate({
    mutateFn: deleteTransaction,
    key,
    successMsg: 'Successfully deleted transaction',
    failureMsg: 'Failed to delete transaction',
  });

  return (
    <DeleteModal
      header="Delete Transaction"
      isOpen={isOpen}
      onClose={onClose}
      onDelete={() => mutate(data.id)}
    >
      <strong>{formatCurrency(data.amount)}</strong>?
    </DeleteModal>
  );
};

export default DeleteTransaction;
