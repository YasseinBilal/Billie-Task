import React from 'react';
import { toGermanFormat } from '../../utils';

function Customer({
  name,
  budget,
  budget_spent: budgetSpent,
  date_of_first_purchase: date
}) {
  return (
    <div className="container">
      <div className="customer-wrapper row">
        <div className="customer-data col col-lg-3 col-sm-12">
          <h5>Customer Name</h5>
          <p>{name}</p>
        </div>
        <div className="customer-data col col-lg-3 col-sm-12">
          <h5>Date of first Purchase</h5>
          <p>{date}</p>
        </div>
        <div className="customer-data col col-lg-2 col-sm-12">
          <h5>Total Budget</h5>
          <p>{toGermanFormat(budget)}</p>
        </div>
        <div className="customer-data col col-lg-2 col-sm-12">
          <h5>Budget Spent</h5>
          <p>{toGermanFormat(budgetSpent)}</p>
        </div>
        <div className="customer-data col col-lg-2 col-sm-12">
          <h5>Budget Left</h5>
          <p>{toGermanFormat(parseFloat(budget) - parseFloat(budgetSpent))}</p>
        </div>
      </div>
    </div>
  );
}

export default Customer;
