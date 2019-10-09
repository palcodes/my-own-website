import React from 'react';
import Avatar from './components/Avatar';
import About from './screens/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
        <Row>
          <About />
        </Row>
    </Container>
    </div>
    </Router>
  );
}

export default App;