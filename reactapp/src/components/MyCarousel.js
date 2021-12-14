import { Carousel, Container } from 'react-bootstrap'


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
                <h3>
                    Latest Release
                </h3>
                <Carousel>


                    <Carousel.Item>
                        <img
                            style={{

                            }}
                            className="d-block w-100"
                            src="https://images-na.ssl-images-amazon.com/images/I/91uxJwnolDL.jpg"
                            alt="First slide"
                            height="300px"

                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    )
}

export default MyCarousel