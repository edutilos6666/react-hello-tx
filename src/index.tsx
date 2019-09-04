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
import ModalsExample from './components/ModalsExample';
import NavsExample from './components/NavsExample';
import NavbarsExample from './components/NavbarsExample';
import OverlaysExample from './components/OverlaysExample';
import PaginationsExample from './components/PaginationsExample';
import ProgressExample from './components/ProgressExample';
import SpinnersExample from './components/SpinnersExample';
import TableExample from './components/TableExample';
import TabsExample from './components/TabsExample';
import ToastsExample from './components/ToastsExample';

import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';


const client = new ApolloClient({
    // uri: 'https://spacexdata.herokuapp.com/graphql'
    uri: 'http://localhost:3001/graphql'
});

ReactDOM.render(
<ApolloProvider client={client}>
  <ApolloHooksProvider client={client}>
    <App/>
  </ApolloHooksProvider>
</ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
