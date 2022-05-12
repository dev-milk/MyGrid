import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';
import { 
  Container,
  Row,
  Col,
   } from 'react-bootstrap';
  import {BrowserRouter, Route, Routes } from "react-router-dom";
  import Links from './Links';
  import Home from './Home';
  import Works from './Works';
  import About from './About';
  import ListGroup from './components/ListGroup';
 
  

function App() {
  return (
    <div >

<Container fluid>
<Row >
     <Col xs={2} className="mx-0, px-0">
       <div>
        <ListGroup  variant="flush" className="text-center">
          <ListGroup.Item action href="/">Home-DashBoad</ListGroup.Item>
          <ListGroup.Item action href="./Works">Works-Business</ListGroup.Item>
          <ListGroup.Item action href="./About">About-Profile</ListGroup.Item>
        </ListGroup>
  </div> 
    </Col>
    <Col xs={10} className="mx-0">
    <div>
      <BrowserRouter>
        <Links /> 
         <Routes> 
        <Route exact path="/" element={<Home />} />
          <Route exact path="/Works" element={<Works />} />
          <Route exact path="/About" element={<About />} />
       </Routes> 
       </BrowserRouter>
      </div> 
      </Col>
  </Row>

</Container>

  </div>
  );
}

export default App;
