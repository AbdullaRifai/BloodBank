import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Header className="Header"/>
    </Container>
  );
}

export default App;
