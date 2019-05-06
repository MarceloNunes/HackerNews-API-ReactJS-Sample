import React from 'react';
import {shallow} from 'enzyme';
import {StoryListItem} from '../../../src/components/stories/storyListItem.component';
import stories from '../../fixtures/stories';

test('should create StoryListItem', () => {
  const wrapper = shallow(<StoryListItem story={stories[0]}/>);

  expect(wrapper).toMatchSnapshot();
});
