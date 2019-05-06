import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {Button, Dimmer, Feed, Icon, List, Loader} from 'semantic-ui-react';
import {ItemComment} from './itemComment.component';

const mapStateToProps = state => ({
  comment: state.comment
});

export class StoryListItem extends React.Component {
  state = {
    viewComment: false
  };

  handleToggleCommentsClick = async () => {
    await this.setState(prevState => Object.assign(prevState, {
      viewComment: !prevState.viewComment
    }));

    const {onLoadComments, story} = this.props;
    await onLoadComments(story.id);

    this.setState(prevState => prevState);
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
                  <span>{'by ' + by}</span>
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
                    &nbsp; Points &nbsp;&nbsp;&nbsp;
                    <Icon name='user circle' color='orange'/>
                    &nbsp;&nbsp;
                    {descendants || 'No'}
                    &nbsp;Comments

                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </List.Content>
        {descendants > 0 && (
          <List.Content floated='right'>
            <Button
              color='orange'
              basic
              onClick={this.handleToggleCommentsClick}
            >
              {!viewComment && descendants > 20 && (<span>Show 20 comments</span>)}
              {!viewComment && descendants <= 20 && (<span>Show comments</span>)}
              {viewComment && (<span>Hide comments</span>)}
            </Button>
          </List.Content>
        )}
        {viewComment && (
          <span>
            {!comments &&(
              <Dimmer page active inverted>
                <Loader
                  content='Loading'
                  size='big'
                />
              </Dimmer>
            )}
            {comments && comments.length > 0 && (
              <List.Content style={{paddingTop: '12px'}} floated='left'>
                {comments.map(comment => (
                  <ItemComment key={comment.id} comment={comment}/>
                ))}
              </List.Content>
            )}
          </span>
        )}
      </List.Item>
    );
  }
}

export default connect(
  mapStateToProps
)(StoryListItem);
