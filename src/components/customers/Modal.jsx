import React, { useState } from 'react';
import Modal from '@trendmicro/react-modal';
import { toGermanFormat } from '../../utils';

function CustomerModal({
  selectedCustomer,
  handleBudgetChange,
  updateTotalBudget,
  submitted,
  setSubmitted,
  openModal,
  dispatch,
  ...props
}) {
  const { onClose } = props;
  const { id, budget, budget_spent: budgetSpent, name } =
    selectedCustomer || {};
  const [showConfirmation, setShowConfirmation] = useState(false);

  let validationMessage = '';

  function isValidBudget() {
    if (!budget || parseFloat(budgetSpent) > parseFloat(budget)) {
      validationMessage = `Budget must not be less than ${toGermanFormat(
        budgetSpent
      )}`;
      return false;
    }
    return true;
  }

  function showConfirm() {
    setSubmitted(true);
    if (!isValidBudget()) return;
    onClose();
    setShowConfirmation(true);
  }

  function confirm() {
    setShowConfirmation(false);
    dispatch(updateTotalBudget({ id, totalBudget: budget }));
  }

  function cancelConfim() {
    setShowConfirmation(false);
    openModal();
  }

  const confirmationModal = (
    <Modal show={showConfirmation} showCloseButton={false}>
      <Modal.Header>
        <Modal.Title>Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body padding>
        <p>
          {`Are you Sure you want to update the Budget to ${toGermanFormat(
            budget
          )} ?`}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button type="submit" className="btn btn-primary" onClick={confirm}>
          Confrim
        </button>
        <button type="button" className="btn btn-light" onClick={cancelConfim}>
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  );

  const budgetModal = (
    <Modal {...props}>
      <Modal.Header>
        <Modal.Title>{`Update ${name} Budget`}</Modal.Title>
      </Modal.Header>
      <Modal.Body padding>
        <form>
          <div className="form-group">
            <label htmlFor="budget">Total Budget</label>
            <input
              type="number"
              className={`form-control ${
                submitted && !isValidBudget() ? ' is-invalid' : ''
              }`}
              id="budget"
              placeholder="Enter total budget"
              value={budget}
              onChange={handleBudgetChange}
            />
            {validationMessage !== '' ? (
              <div className="invalid-feedback">{validationMessage}</div>
            ) : (
              ''
            )}
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="submit"
          id="update"
          className="btn btn-primary"
          onClick={showConfirm}
        >
          Update
        </button>
        <button type="button" className="btn btn-light" onClick={onClose}>
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  );

  return !showConfirmation ? budgetModal : confirmationModal;
}

export default CustomerModal;
