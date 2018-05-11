import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'assert';
import UserPage from './UserPage';

Enzyme.configure({ adapter: new Adapter() });
// unit tests for Preloader component
describe('UserPage  component', () => {
  describe('render', () => {
    const wrapper = Enzyme.shallow(<UserPage />);
    it('should render UserPage component', () => {
      assert.equal(wrapper.find('.user__page').length, 1);
    });
    it('should render page__content component child', () => {
      assert.equal(wrapper.find('.page__content').length, 1);
    });
  });
});
