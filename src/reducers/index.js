import { combineReducers } from 'redux';
import { customerReducer } from './customer.reducer';

const rootReducer = combineReducers({
  customers: customerReducer
});

export default rootReducer;
