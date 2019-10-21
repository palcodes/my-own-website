import React from 'react';
import About from './screens/About';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row,} from 'react-bootstrap';

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