import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
// react-apollo works as a glue layer between client side(react) and GraphQL serve
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div className='container'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/songs/new' component={SongCreate} />
            <Route path='/' component={SongList} />
          </Switch>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
