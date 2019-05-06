import React from 'react';
import {shallow} from 'enzyme';
import {MainMenu} from '../../../src/components/core/mainMenu.component';

test('should create the Main Menu bar', () => {
  const wrapper = shallow(<MainMenu/>);

  expect(wrapper).toMatchSnapshot();
});
