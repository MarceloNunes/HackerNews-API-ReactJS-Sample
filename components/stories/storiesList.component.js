import React from 'react';
import { connect } from 'react-redux';
import { StoryListItem } from './storyListItem.component';

import { fetchTopStories } from '../../selectors/stories.selector';

import {
  Container,
  Dimmer,
  List,
  Loader,
} from 'semantic-ui-react';

const mapDispatchToProps = (dispatch) => ({
  onLoadTopStories: () => dispatch(fetchTopStories())
});

const mapStateToProps = state => ({
  stories: state.stories,
});

export class StoriesList extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.props.onLoadTopStories()
      .then(() => this.setState(prevState => Object.assign(prevState, {
        loading: false
      })));
  }

  render() {
    return (
      <Container text style={{ marginTop: '5em' }}>
        { this.state.loading &&
          <Dimmer page active inverted>
            <Loader
              content='Loading'
              size='big' />
          </Dimmer>
        }
        <List relaxed='very' divided style={{ marginBottom: '24px' }}>
          {
            this.props.stories && this.props.stories.map(story => (
              <StoryListItem story={ story } />
            ))
          }
        </List>
      </Container>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoriesList);
