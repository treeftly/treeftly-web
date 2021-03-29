import React from 'react'
import PropTypes from 'prop-types'
import FormModal from '../modals/FormModal'

const TransactionModal = ({ isOpen, onClose }) => {
  return (
    <FormModal isOpen={isOpen} onClose={onClose} onSubmit={() => {}} header='New transaction'>
      New Transaction
    </FormModal>
  )
}

TransactionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default TransactionModal
