import customerConstants from '../constants/customer.constants';
import customerService from '../services/customers.service';

export const customerActions = {
  getAll,
  updateTotalBudget
};

function getAll() {
  return dispatch => {
    customerService
      .getAll()
      .then(customers => dispatch(success({ customers })));
  };

  function success({ customers }) {
    return {
      type: customerConstants.GET_ALL_CUSTOMERS_SUCCESS,
      customers
    };
  }
}

function updateTotalBudget({ id, totalBudget }) {
  return {
    type: customerConstants.UPDATE_BUDGET_SUCCESS,
    data: { id, totalBudget }
  };
}
