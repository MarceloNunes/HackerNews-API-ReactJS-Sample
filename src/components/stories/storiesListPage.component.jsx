import React from 'react';
import { MainMenu } from '../core/mainMenu.component';
import {StoriesList} from './storiesList.component';

export const StoriesListPage = () => (
  <div>
    <MainMenu />
    <StoriesList />
  </div>
);

export default StoriesListPage;
