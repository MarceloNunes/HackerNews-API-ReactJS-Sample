import React from 'react';
import { shallow } from 'enzyme';
import { ItemComment } from '../../../src/components/stories/itemComment.component';
import stories from '../../fixtures/stories';

test('should create ItemComment', () => {
    const wrapper = shallow(<ItemComment comment={stories[0].comments[1]} />);

    expect(wrapper).toMatchSnapshot();
});