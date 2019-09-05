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
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import RocketLaunch from './components/RocketLaunch';


const client = new ApolloClient({
    // uri: 'https://spacexdata.herokuapp.com/graphql'
    uri: 'http://localhost:3001/graphql'
});


const routing = (
  <Router>
    <Header />
    <Route exact path="/" component={App} />
    <Route exact path="/rocket-launch" component={RocketLaunch} />
    <Route exact path="/theme-switcher" component={ThemeSwitcher} />
    <Route exact path="/headings-example" component={HeadingsExample} />
    <Route exact path="/breadcrumbs-example" component={BreadcrumbsExample} />
    <Route exact path="/alerts-example" component={AlertsExample} />
    <Route exact path="/accordion-example" component={AccordionExample} />
    <Route exact path="/buttons-and-button-groups-example" component={ButtonsAndButtonGroupsExample} />
    <Route exact path="/card-example" component={CardExample} />
    <Route exact path="/card-styles-example" component={CardStylesExample} />
    <Route exact path="/dropdowns-example" component={DropdownsExample} />
    <Route exact path="/forms-example" component={FormsExample} />
    <Route exact path="/input-group-example" component={InputGroupExample} />
    <Route exact path="/images-example" component={ImagesExample} />
    <Route exact path="/figure-example" component={FigureExample} />
    <Route exact path="/jumbotron-example" component={JumbotronExample} />
    <Route exact path="/list-group-example" component={ListGroupExample} />
    <Route exact path="/modals-example" component={ModalsExample} />
    <Route exact path="/navs-example" component={NavsExample} />
    <Route exact path="/navbars-example" component={NavbarsExample} />
    <Route exact path="/overlays-example" component={OverlaysExample} />
    <Route exact path="/paginations-example" component={PaginationsExample} />
    <Route exact path="/progress-example" component={ProgressExample} />
    <Route exact path="/spinners-example" component={SpinnersExample} />
    <Route exact path="/table-example" component={TableExample} />
    <Route exact path="/tabs-example" component={TabsExample} />
    <Route exact path="/toasts-example" component={ToastsExample} />
  </Router>
)

ReactDOM.render(
<ApolloProvider client={client}>
  <ApolloHooksProvider client={client}>
    {routing}
  </ApolloHooksProvider>
</ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
