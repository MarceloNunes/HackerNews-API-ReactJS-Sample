import React from 'react';
import {Menu, Container, Icon} from 'semantic-ui-react';

export const MainMenu = () => (
  <Menu fixed='top' inverted color='orange'>
    <Container>
      <Menu.Item as='a' header>
        <Icon inverted name="hacker news" size="big"/>
        HackerNews API ReactJS Sample
      </Menu.Item>
    </Container>
  </Menu>
);

export default MainMenu;
