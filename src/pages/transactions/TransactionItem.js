import React from 'react'
import { useQuery } from 'react-query'
import { useHistory, useParams } from 'react-router'
import TransactionModal from '../../components/transaction-modal/TransactionModal'
import { getTransaction, key } from '../../services/transactions'

const TransactionItem = () => {
  const { id } = useParams()
  const history = useHistory()
  const { data } = useQuery(`${key}-${id}`, () => getTransaction(id))

  const onClose = () => {
    history.push('/transactions')
  }

  return <TransactionModal isOpen onClose={onClose} mutate={() => {}} values={data} />
}

export default TransactionItem
