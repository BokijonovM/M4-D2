import { Carousel, Container } from 'react-bootstrap'
import books from '../data/history.json'

const MyCarousel = () => {
    return (
        <>
            <h2 className="mb-2 pl-5" style={{
                backgroundColor: "grey",
                paddingTop: "90px",
                paddingBottom: "90px",
                position: "relative"

            }}>Welcome to StriveBook</h2>
            <Container>
                <Carousel>
                    {books.map(book => (
                        <Carousel.Item>
                            <img
                                style={{
                                    objectFit: "cover",

                                }}
                                className="d-block w-100"
                                src={book.img}
                                alt="First slide"
                                height="300px"

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