import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeSwitcher from './ThemeSwitcher';
import HeadingsExample from './components/HeadingsAndBadgeExample';
import BreadcrumbsExample from './components/BreadcrumbsExample';
import AlertsExample from './components/AlertsExample';
import AccordionExample from './components/AccordionExample';
import ButtonsAndButtonGroupsExample from './components/ButtonsAndButtonGroupsExample';
import CardExample from './components/CardExample';
import CardStylesExample from './components/CardStylesExample';
import DropdownsExample from './components/DropdownsExample';
import FormsExample from './components/FormsExample';
import InputGroupExample from './components/InputGroupExample';
import ImagesExample from './components/ImagesExample';
import FigureExample from './components/FigureExample';
import JumbotronExample from './components/JumbotronExample';
import ListGroupExample from './components/ListGroupExample';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ListGroupExample />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
