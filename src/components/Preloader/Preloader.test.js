import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'assert';
import Preloader from './Preloader';

Enzyme.configure({ adapter: new Adapter() });
// unit tests for Preloader component
describe('Preloader  component', () => {
  describe('render', () => {
    const wrapper = Enzyme.shallow(<Preloader />);
    it('should render Preloader component', () => {
      assert.equal(wrapper.find('.preloader-container').length, 1);
    });
    it('should render Preloader component child', () => {
      assert.equal(wrapper.find('.preloader').length, 1);
    });
  });
});
