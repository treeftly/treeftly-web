import React from 'react'
import { useQuery } from 'react-query'
import { useHistory, useParams } from 'react-router-dom'
import TransactionModal from '../../components/transaction-modal/TransactionModal'
import { getTransaction, key, updateTransaction } from '../../services/transactions'
import { useMutate } from '../../utils/hooks'

const TransactionItem = () => {
  const { id } = useParams()
  const history = useHistory()
  const { data } = useQuery(`${key}-${id}`, () => getTransaction(id))
  const { mutate } = useMutate({
    key,
    mutateFn: updateTransaction,
    successMsg: 'Successfully updated transaction',
    failureMsg: 'Failed to update transaction',
  })

  const onClose = () => {
    history.push('/transactions')
  }

  const onSave = (payload) => {
    mutate({ id: data.id, ...payload })
    history.push('/transactions')
  }

  return <TransactionModal isOpen onClose={onClose} mutate={onSave} values={data} />
}

export default TransactionItem
