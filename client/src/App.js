import React, { Component } from 'react';
import Apolloclient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches'
import './App.css';
import logo from './logo.png';

const client = new Apolloclient({
  uri: 'http://localhost:5000/graphql'
})


function App() {
  return (
    <ApolloProvider client={client}>
    <div className="container">
     <img className="logo" src={logo} alt="SpaceX" style={{width: 300,display: 'block', margin: 'auto'}}/>
     <Launches />
    </div>
    </ApolloProvider>
  );
}

export default App;
