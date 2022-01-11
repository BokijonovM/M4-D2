import { Card, Button } from 'react-bootstrap'
import MyBadge from './MyBadge'
import { useState } from 'react'


const Cardp = (props) => {

    // state = {
    //     showPrice: null,
    //     btnColor: 'primary',
    //     cardClass: "px-3 pb-5 m-0 border-0 bg-transparent w-100",
    //     clicked: false
    // }
    const [showPrice, setShowPrice] = useState(null)
    const [btnColor, setBtnColor] = useState('primary')
    const [cardClass, setCardClass] = useState('px-3 pb-5 m-0 border-0 bg-transparent w-100')
    const [clicked, setClicked] = useState(false)





    return (
        <Card className={cardClass}>
            <MyBadge color="warning" price={this.props.theme.price} />
            <Card.Img className="imageFix" variant="top" style={{
                objectFit: "cover",
                height: "300px"
            }} src={this.props.theme.img} />
            <Card.Body className="d-flex flex-column pb-0 pt-2 px-0 justify-content-between">
                <Card.Title className="mb-2">{this.props.theme.title}</Card.Title>
                <div>
                    <Card.Text className="text-truncate first-Uppercase">
                        {this.props.theme.category}
                    </Card.Text>

                    <Button
                        className="mt-3 w-100"
                        variant={btnColor}
                        onClick={() => {
                            setShowPrice(this.props.theme.price)
                            setBtnColor("secondary")
                            setCardClass('p-3 m-0 bg-dark border-0 w-100')
                            setClicked(true)
                            // this.setState({
                            //     showPrice: this.props.theme.price,
                            //     btnColor: 'secondary',
                            //     cardClass: "p-3 m-0 bg-dark border-0 w-100",
                            //     clicked: true
                            // })
                            this.props.getUserSelectedBook(this.props.theme)


                        }

                        }
                        onDoubleClick={() => {
                            setShowPrice('')
                            setBtnColor("primary")
                            setCardClass('p-3 m-0 border-0 bg-transparent w-100')
                            setClicked(false)

                            // this.setState({
                            //     showPrice: '',
                            //     btnColor: 'primary',
                            //     cardClass: "p-3 m-0 border-0 bg-transparent w-100",
                            //     clicked: false
                            // })
                        }

                        }
                    >Order Now {showPrice && (<span>£ {showPrice}</span>)}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )

}

export default Cardp
