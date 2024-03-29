import React from 'react'
import PropTypes from 'prop-types'
import DeleteModal from '../../components/modals/DeleteModal'
import { useMutate } from '../../utils/hooks'
import { deleteTransaction, key } from '../../services/transactions'
import { formatCurrency } from '../../utils/functions'

const DeleteTransaction = ({ data, isOpen, onClose }) => {
  const { mutate } = useMutate({
    mutateFn: deleteTransaction,
    key,
    successMsg: 'Successfully deleted transaction',
    failureMsg: 'Failed to delete transaction',
  })

  return (
    <DeleteModal
      header='Delete Transaction'
      isOpen={isOpen}
      onClose={onClose}
      onDelete={() => mutate(data.id)}
    >
      Are you sure you want to delete this transaction with amount{' '}
      <strong>{formatCurrency(data.amount)}</strong>?
    </DeleteModal>
  )
}

DeleteTransaction.propTypes = {
  data: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default DeleteTransaction
