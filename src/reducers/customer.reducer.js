import customerConstants from '../constants/customer.constants';

const initialState = [];

export function customerReducer(state = initialState, action) {
  switch (action.type) {
    case customerConstants.GET_ALL_CUSTOMERS_SUCCESS:
      return [...action.customers];

    case customerConstants.UPDATE_BUDGET_SUCCESS:
      const newState = [...state];
      Object.assign(
        newState.find(customer => customer.id === action.data.id),
        { budget: action.data.totalBudget }
      );
      return [...newState];

    default:
      return state;
  }
}
