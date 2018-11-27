import React from 'react';
import { shallow } from 'enzyme';
import { StoriesListPage } from '../../../src/components/stories/storiesListPage.component';

test('should create StoriesList page', () => {
    const wrapper = shallow(<StoriesListPage />);

    expect(wrapper).toMatchSnapshot();
});