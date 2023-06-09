import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { Row, Col } from "react-bootstrap";
function Home2() {
  return (
   <>
   <Container className="container-fluid">
   <Row  className='bg'>
                    <Col md={6} lg={3}>
   <div>
   
    
    </div>
    </Col> 
                    </Row>
                    <Row className='im' >
                    <Col md={6} lg={3}>
    <div >
  
    </div>
    </Col> 
                    </Row>
    
                    
  




    <Row className="gh">
                    <Col md={6} lg={3}>
                        <Card className="m-3" style={{ width: '18rem' }}>
                        
                        <Card.Body>
       
       <Card.Text>
        <h2 className='H'>Thorw your First
           Boomerang Today,
           and Prepare to
           Catch the Profits</h2>
       </Card.Text>
       <Card.Text>
       Excusive Properties deals that are not
           notavallable through traditional means unlock
       </Card.Text>
      
     </Card.Body>
                        </Card>
                    </Col> 
                    </Row>





   </Container>
   </>
  )
}
export default Home2;
