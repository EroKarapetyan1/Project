import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselStyles } from './carosuelStyled';

export function MyCarousel() {
    return (
        <CarouselStyles>

<Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src=""
                    alt="Slide 1"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://3dplanet.am/wp-content/uploads/2025/02/010203-1.png"
                    alt="Slide 2"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src=""
                    alt="Slide 3"
                />
            </Carousel.Item>
        </Carousel>
        </CarouselStyles>
       
    );
}