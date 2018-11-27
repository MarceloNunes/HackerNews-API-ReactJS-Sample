import React from 'react';
import moment from 'moment';
import renderHTML from 'react-render-html';
import { Feed, Icon } from 'semantic-ui-react';

export const ItemComment = ({
  comment: { by, score, text, time, comments }
}) => (
  <Feed>
    <Feed.Event>
      <Feed.Label>
        <Icon name='user circle' color='orange'></Icon>
      </Feed.Label>
      <Feed.Content style={{fontSize: '90%'}}>
      <Feed.Date>{ moment(time * 1000).calendar() }</Feed.Date>
        <Feed.Summary>
          by <a>{ by }</a>
        </Feed.Summary>
        <Feed.Extra text content={ text }>
          { renderHTML(String(text)) }
        </Feed.Extra>
        <Feed.Extra text>
          { comments && comments.length > 0  && comments.map(comment => (
            <ItemComment comment={ comment }></ItemComment>
          ))}
        </Feed.Extra>
      </Feed.Content>
    </Feed.Event>
  </Feed>
);