import React from 'react'
import PropTypes from 'prop-types'
import { deleteCategory, key } from '../../services/categories'
import { useMutate } from '../../utils/hooks'
import DeleteModal from '../../components/modals/DeleteModal'

const DeleteCategory = ({ isOpen, onClose, data }) => {
  const { mutate } = useMutate({
    mutateFn: deleteCategory,
    key,
    successMsg: 'Successfully deleted category!',
    failureMsg: 'Failed to delete category',
  })

  return (
    <DeleteModal
      isOpen={isOpen}
      onClose={onClose}
      onDelete={() => mutate(data.id)}
      header='Delete Category'
    >
      This will remove all transactions attached to this category. Are you sure you want to delete
      category <strong>{data.name}</strong>?
    </DeleteModal>
  )
}

DeleteCategory.propTypes = {
  data: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
}

export default DeleteCategory
