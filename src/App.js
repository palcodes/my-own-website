import React from 'react';
import Mainer from './components/Mainer';
import Avatar from './components/Avatar';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
      <Row>
        <Col xs={12} xl lg={12}>
          <Avatar />
        </Col>
      </Row>
      <Row>
        <Mainer />
      </Row>
      </Container>
    </div>
  );
}

export default App;