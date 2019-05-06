import React from 'react';
import {connect} from 'react-redux';

import {
  Container,
  Dimmer,
  List,
  Loader,
} from 'semantic-ui-react';

import StoryListItem from './storyListItem.component';
import {fetchComments, fetchTopStories} from '../../selectors/stories.selector';


const mapDispatchToProps = (dispatch) => ({
  onLoadTopStories: () => dispatch(fetchTopStories()),
  onLoadComments: (stories, storyId) => dispatch(fetchComments(stories, storyId))
});

const mapStateToProps = state => ({
  stories: state.stories,
});

export class StoriesList extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const {onLoadTopStories} = this.props;

    onLoadTopStories()
      .then(() => this.setState(prevState => Object.assign(prevState, {
        loading: false
      })));
  }

  handleLoadComments = async (storyId) => {
    const {stories, onLoadComments} = this.props;
    await onLoadComments(stories, storyId);
  };

  render() {
    const {state, props, handleLoadComments} = this;
    const {stories} = props;
    const {loading} = state;

    return (
      <Container text style={{marginTop: '5em'}}>
        {loading && (
          <Dimmer page active inverted>
            <Loader
              content='Loading'
              size='big'
            />
          </Dimmer>
        )}
        <List relaxed='very' divided style={{marginBottom: '24px'}}>
          {
            stories && stories.map(story => (
              <StoryListItem key={story.id} story={story} onLoadComments={handleLoadComments}/>
            ))
          }
        </List>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoriesList);
