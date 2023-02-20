// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { useQuery } from 'react-query';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useHistory, useParams } from 'react-router-dom';

// @ts-expect-error TS(6142): Module '../../components/transaction-modal/Transac... Remove this comment to see the full error message
import TransactionModal from '../../components/transaction-modal/TransactionModal';
import {
  getTransaction,
  key,
  updateTransaction,
} from '../../services/transactions';
import { useMutate } from '../../utils/hooks';

const TransactionItem = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data } = useQuery(`${key}-${id}`, () => getTransaction(id));
  const { mutate } = useMutate({
    key,
    mutateFn: updateTransaction,
    successMsg: 'Successfully updated transaction',
    failureMsg: 'Failed to update transaction',
  });

  const onClose = () => {
    history.push('/transactions');
  };

  const onSave = (payload: any) => {
    // @ts-expect-error TS(2532): Object is possibly 'undefined'.
    mutate({ id: data.id, ...payload });
    history.push('/transactions');
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <TransactionModal isOpen onClose={onClose} mutate={onSave} values={data} />
  );
};

export default TransactionItem;
