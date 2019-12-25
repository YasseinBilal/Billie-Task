import customersData from './customers-mock-data';

export default { getAll };

function getAll() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(customersData);
    }, 300);
  });
}
