import { Carousel, Container } from 'react-bootstrap'
import books from '../data/history.json'

const MyCarousel = () => {
    return (
        <>
            <Container>
                <Carousel>
                    {books.slice(0, 3).map(book => (
                        <Carousel.Item key={book.asin}>
                            <img
                                style={{
                                    objectFit: "cover",

                                }}
                                className="d-block w-100"
                                src={book.img}
                                alt="First slide"
                                height="400px"

                            />
                            <Carousel.Caption style={{
                                backgroundColor: "grey"
                            }}>
                                <h3>Latest Release</h3>
                                <p>{book.title}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>

        </>
    )
}

export default MyCarousel