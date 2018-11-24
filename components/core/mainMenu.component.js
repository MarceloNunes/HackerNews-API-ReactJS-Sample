import React from 'react';
import { Menu, Container, Icon, Image } from 'semantic-ui-react'

export const MainMenu = () => (
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item as='a' header>
        <Icon name="sidebar" size="big"/>
        HackerNews API ReactJS Sample
      </Menu.Item>
    </Container>
  </Menu>
);

export default MainMenu;