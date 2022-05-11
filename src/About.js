import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';
import { 
  Container,
  Row,
  Col, } from 'react-bootstrap';
 
  
  
  

function About() {
  return (
    <div >
     <Container >
  <Row style={{margin: '30px'}}  className="justify-content-md-center">
    <Col > 
     {<p>これはAboutの内容です。</p>}
    </Col>
  </Row> 

</Container>
    
  </div>
  );
}

export default About;
