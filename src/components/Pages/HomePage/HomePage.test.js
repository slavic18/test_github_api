import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'assert';
import UserPage from './HomePage';

Enzyme.configure({ adapter: new Adapter() });
// unit tests for HomePage component
describe('HomePage  component', () => {
  describe('render', () => {
    const wrapper = Enzyme.shallow(<UserPage />);
    it('should render HomePage component', () => {
      assert.equal(wrapper.find('.home__page').length, 1);
    });
    it('should render page__content component child', () => {
      assert.equal(wrapper.find('.page__content').length, 1);
    });
  });
});
