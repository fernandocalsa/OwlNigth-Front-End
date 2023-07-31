import Carousel from 'react-bootstrap/Carousel';
import './Carrousel.css';
import Logo from '../../../src/images/logo.svg';
// import nere from '../../../src/images/nere.png';
// import peque from '../../../src/images/Peque.png';


function Carrousel() {
  return (
    <div className='carrousel-box'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-blockw-100"
          src={Logo}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Logo}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Logo}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carrousel;