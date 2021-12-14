import { Container, Card, Row, Col, Carousel } from 'react-bootstrap'
import books from '../data/history.json'



const Home = () => {
    return (
        <>

            <Container>

                <Row xs={2} md={4} className="g-4">
                    {books.map(book => (
                        <Col className="">
                            <Card className="my-2" key={book.asin}>
                                <Card.Img variant="top" src={book.img} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text className="ml-auto">
                                        Category: {book.category}
                                    </Card.Text>
                                    <Card.Text className="ml-auto">
                                        Price: {book.price}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Home