import { Component } from "react";
import { Container, Form, Button, FormControl, Row } from "react-bootstrap";
import Cardp from "./Cardp";

class Search extends Component {

    state = {
        search: {
            searchInput: '',
            books: []
        }
    };

    searchBooks = (e) => {
        e.preventDefault()
        this.setState({
            search: {
                searchInput: e.target.value,
                books: this.props.theme.filter((book) => book.title.toLowerCase().includes(this.state.search.searchInput.toLowerCase())
                )
            }
        }, () => console.log(this.state.search.searchInput))
        if (e.target.value === '') {
            this.setState({
                search: {
                    searchInput: e.target.value,
                    books: []
                }
            })
        }

    }

    render() {
        return (
            <Container className="xtra-topMargin px-0">
                <Row>
                    <h2 className="px-4 ml-2 my-5 align-items-center">{this.props.title}</h2>
                    <Form inline className="my-5">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => this.searchBooks(e)} />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Row>
                <div className="row row-cols-sm-2 row-cols-md-2 row-cols-lg-4 px-3">

                    {this.state.search.books.map((book) => <Cardp key={book.asin} theme={book} />)}
                </div>
            </Container>
        );
    }
}

export default Search;
