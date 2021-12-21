import { Card, Button } from 'react-bootstrap'
import { Component } from 'react'
import MyBadge from './MyBadge'


class Cardp extends Component {

    state = {
        showPrice: null,
        btnColor: 'primary',
        cardClass: "px-3 py-4 m-0 border-0 bg-transparent w-100",
        clicked: false
    }


    render() {

        return (
            <Card className={this.state.cardClass}>
                <MyBadge color="warning" price={this.props.theme.price} />
                <Card.Img className="imageFix" variant="top" style={{
                    objectFit: "cover",
                    height: "250px"
                }} src={this.props.theme.img} />
                <Card.Body className="d-flex flex-column pb-0 pt-2 px-0 justify-content-between">
                    <Card.Title className="mb-2">{this.props.theme.title}</Card.Title>
                    <div>
                        <Card.Text className="text-truncate first-Uppercase">
                            {this.props.theme.category}
                        </Card.Text>

                        <Button
                            className="mt-3 w-100"
                            variant={this.state.btnColor}
                            onClick={() => {
                                this.setState({
                                    showPrice: this.props.theme.price,
                                    btnColor: 'secondary',
                                    cardClass: "p-3 m-0 bg-dark border-0 w-100",
                                    clicked: true
                                })
                                this.props.getUserSelectedBook(this.props.theme)


                            }

                            }
                            onDoubleClick={() => {
                                this.setState({
                                    showPrice: '',
                                    btnColor: 'primary',
                                    cardClass: "p-3 m-0 border-0 bg-transparent w-100",
                                    clicked: false
                                })
                            }

                            }
                        >Order Now {this.state.showPrice && (<span>£ {this.state.showPrice}</span>)}
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

export default Cardp
