import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {Button, Feed, Icon, List} from 'semantic-ui-react';
import {ItemComment} from './itemComment.component';

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
  };

  render() {
    const {state, props} = this;
    const {by, time, url, title, score, descendants, comments} = props.story;
    const {viewComment} = state;

    return (
      <List.Item>
        <List.Content floated='left'>
          <Feed>
            <Feed.Event>
              <Feed.Content>
                <Feed.Summary>
                  by
                  {' '}
                  {by}
                  <Feed.Date>
                    {moment(time * 1000).calendar()}
                  </Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>
                  <h4>
                    <a
                      href={url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {title}
                    </a>
                  </h4>
                </Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name='thumbs up outline' color='blue'/>
                    {score}
                    {' '}
                    Points &nbsp;&nbsp;&nbsp;
                    <Icon name='user circle' color='orange'/>
                    {' '}
                    &nbsp;
                    {descendants || 'No'}
                    {' '}
                    Comments
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </List.Content>
        <List.Content floated='right'>
          <Button
            basic
            color='orange'
            style={{fontSize: '80%', padding: '12px'}}
            disabled={!descendants}
            onClick={this.handleToggleCommentsClick}
          >
            {!viewComment && (<span>View Comments</span>)}
            {viewComment && (<span>Hide Comments</span>)}
          </Button>
        </List.Content>
        {viewComment && comments && comments.length > 0 && (
          <List.Content style={{paddingTop: '12px'}} floated='left'>
            {comments.map(comment => (
              <ItemComment key={comment.id} comment={comment}/>
            ))}
          </List.Content>
        )}
      </List.Item>
    );
  }
}

export default connect(
  mapStateToProps
)(StoryListItem);
