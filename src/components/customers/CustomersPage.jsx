import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { customerActions } from '../../actions/customer.action';
import './Customers.scss';
import Customer from './Customer';
import CustomerModal from './Modal';

function CustomersPage({ getAllCustomers, updateTotalBudget, customers = [] }) {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const dispatch = useDispatch();

  const modalProps = {
    show,
    onClose: () => setShow(false),
    openModal: () => setShow(true),
    selectedCustomer,
    handleBudgetChange,
    submitted,
    setSubmitted,
    updateTotalBudget,
    dispatch
  };

  if (customers.length === 0) {
    getAllCustomers();
  }

  function onCustomerClick(event, customer) {
    modalProps.openModal();
    setSubmitted(false);
    setSelectedCustomer(customer);
  }

  function handleBudgetChange(e) {
    setSelectedCustomer({ ...selectedCustomer, budget: e.target.value });
  }

  return (
    <div className="customers-page">
      <h2>Customers List</h2>
      <br />
      {customers.map((customer, i) => (
        <div onClick={e => onCustomerClick(e, customer)} key={i}>
          <Customer {...customer} />
        </div>
      ))}
      <CustomerModal {...modalProps} />
    </div>
  );
}

function mapStatToProps(state) {
  const { customers } = state;
  return { customers };
}

const actionCreators = {
  getAllCustomers: customerActions.getAll,
  updateTotalBudget: customerActions.updateTotalBudget
};

export default connect(mapStatToProps, actionCreators)(CustomersPage);
