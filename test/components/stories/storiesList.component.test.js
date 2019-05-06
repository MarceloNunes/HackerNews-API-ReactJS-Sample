import React from 'react';
import {shallow} from 'enzyme';
import {StoriesList} from '../../../src/components/stories/storiesList.component';
import stories from '../../fixtures/stories';

test('should create StoriesList', () => {
  const onLoadTopStories = jest.fn(() => new Promise(resolve => resolve()));
  const wrapper = shallow(<StoriesList onLoadTopStories={onLoadTopStories} stories={stories}/>);

  expect(wrapper).toMatchSnapshot();
});
