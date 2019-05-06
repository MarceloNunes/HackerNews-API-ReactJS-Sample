import React from 'react';
import moment from 'moment';
import renderHTML from 'react-render-html';
import {Feed, Icon} from 'semantic-ui-react';

export const ItemComment = ({comment: {by, text, time, comments}}) => (
  <Feed>
    <Feed.Event>
      <Feed.Label>
        <Icon name='user circle' color='orange'/>
      </Feed.Label>
      <Feed.Content style={{fontSize: '90%'}}>
        <Feed.Summary>
          by
          {' '}
          {by}
          <Feed.Date>
            {moment(time * 1000).calendar()}
          </Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
          {renderHTML(String(text))}
        </Feed.Extra>
        <Feed.Extra text>
          {comments && comments.length > 0 && comments.map(comment => (
            <ItemComment key={comment.id} comment={comment}/>
          ))}
        </Feed.Extra>
      </Feed.Content>
    </Feed.Event>
  </Feed>
);
