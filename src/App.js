import logo from './logo.svg';
import './App.css';

import {Button, Container} from 'react-bootstrap';

import HeroImage from './images/illustration-hero.svg';
import IconMusic from './images/icon-music.svg';

function App() {
  return (
    <Container fluid className="wrapper">
      <Container className="modal-container">
        <Container fluid className="modal-hero">
          <img src={HeroImage}/>
        </Container>
        <Container className="modal-body">
          <h3>Order Summary</h3>
          <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>

          <Container className="modal-body__plan-container">
            <img src={IconMusic}/>
            <Container className="plan-detail-container">
              <p><b>Annual Plan</b></p>
              <p>$59.99/year</p>
            </Container>
            <a href="">Change</a>
          </Container>
          
          <Container className="modal-body__proceed-container">
            <Button className="btn_proceed">Proceed to Payment</Button>
          </Container>
          
          <Container className="modal-body__cancel-container">
            <a href="">Cancel Order</a>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default App;
