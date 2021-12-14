import { Navbar, Nav } from 'react-bootstrap'


const MyNav = (props) => {
    console.log(props)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">StriveBooks - {props.payoff}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    <Nav.Link href="#contact">Browse</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNav