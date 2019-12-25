import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from './Modal';

Enzyme.configure({ adapter: new Adapter() });
function setup() {
  const props = {
    setSubmitted: jest.fn(),
    selectedCustomer: { budget: 100000, budget_spent: 4000 },
    onClose: jest.fn()
  };
  const enzymeWrapper = shallow(<Modal {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

describe('components', () => {
  describe('Modal', () => {
    it('should render correctly', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('.form-group label').text()).toBe(
        'Total Budget'
      );
      expect(enzymeWrapper.find('#budget').props().placeholder).toBe(
        'Enter total budget'
      );
    });

    it('should set submitted to true when user click on update button', () => {
      const { enzymeWrapper, props } = setup();
      const button = enzymeWrapper.find('#update');
      button.simulate('click');
      expect(props.setSubmitted.mock.calls.length).toEqual(1);
    });

    it('should call onClose if updated budget is valid', async () => {
      const { enzymeWrapper, props } = setup();
      const button = enzymeWrapper.find('#update');
      button.simulate('click');
      expect(props.onClose.mock.calls.length).toEqual(1);
    });
  });
});
