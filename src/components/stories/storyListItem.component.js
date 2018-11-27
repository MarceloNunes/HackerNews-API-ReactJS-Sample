import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Button, Feed, Icon, List } from 'semantic-ui-react';
import { ItemComment } from './itemComment.component';

const mapStateToProps = state => ({
  comment: state.comment
});

export class StoryListItem extends React.Component {
  state = {
    viewComment: false
  };

  handleToggleCommentsClick = () => {
    this.setState(prevState => Object.assign(prevState, {
      viewComment: !prevState.viewComment
    }));
  }

  render() {
    return (
      <List.Item>
        <List.Content floated='left'>
          <Feed>
            <Feed.Event>
              <Feed.Content>
                <Feed.Summary>
                  by <a>{ this.props.story.by }</a>
                  <Feed.Date>
                    { moment(this.props.story.time * 1000).calendar() }
                  </Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>
                  <h4>
                    <a href={ this.props.story.url }
                      target='_blank'>
                      { this.props.story.title }
                    </a>
                  </h4>
                </Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                  <Icon name='thumbs up outline' color='blue' />
                  { this.props.story.score } Points &nbsp;&nbsp;&nbsp;
                  <Icon name='user circle' color='orange' /> &nbsp;
                  { this.props.story.descendants || 'No'} Comments
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </List.Content>
        <List.Content floated='right'>
            <Button
              basic color='orange'
              style={{ fontSize: '80%', padding: '12px' }}
              disabled={ !this.props.story.descendants }
              onClick={ this.handleToggleCommentsClick }>
              { !this.state.viewComment && (<span>View Comments</span>) }
              { this.state.viewComment && (<span>Hide Comments</span>) }
              </Button>
        </List.Content>
        { this.state.viewComment && this.props.story.comments && this.props.story.comments.length > 0 &&
          <List.Content style={{ paddingTop: '12px' }} floated='left'>
            { this.props.story.comments.map(comment => (
              <ItemComment key={ comment.id } comment={ comment }></ItemComment>
            ))}
          </List.Content>
        }
      </List.Item>
    );
  }
}

export default connect(
  mapStateToProps
)(StoryListItem);
