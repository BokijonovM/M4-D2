
import { Form, Button } from 'react-bootstrap'
import StarRatings from 'react-star-ratings'
import { useState, useEffect } from 'react'

const AddComment = ({ asin, title }) => {

    // state = {
    //     userReview1: {
    //         comment: '',
    //         rate: undefined,
    //         elementId: this.props.book.asin
    //     }

    // }
    const [userReview1, setUserReview1] = useState({
        comment: '',
        rate: undefined,
        elementId: asin
    })


    const inputHandler = (key, value) => {
        setUserReview1({
            userReview1: {
                ...userReview1,
                [key]: value
            }
        })

    }
    const getRate = (newRating) => {
        setUserReview1({
            userReview1: {
                ...userReview1,
                rate: newRating
            }
        })

    }
    useEffect(() => {
        sendForm()
    }, [asin])

    // componentDidMount() {
    //     this.sendForm()
    // }

    const sendForm = async () => {
        await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
            method: 'POST',
            body: JSON.stringify(userReview1),
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA3YTRjZmY1ZjAwMTU5MGJkYjMiLCJpYXQiOjE2NDE4MjAzMTYsImV4cCI6MTY0MzAyOTkxNn0.QvedsvE9IU4Q5gdIA4tTz8ZM2S62dDJvq2GVMZKUYbE",
                "Content-Type": "application/json"
            }
        })

        setUserReview1({
            userReview1: {
                ...userReview1,
                comment: '',
                rate: undefined

            }
        })
        // await userReview1.getNewComments()
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.props.book.asin !== prevProps.book.asin) {
    //         this.setState({
    //             userReview1: {
    //                 ...this.state.userReview1,
    //                 elementId: this.props.book.asin
    //             }
    //         })
    //     }
    // }




    return (
        <div className="ml-2">
            <h2 className="px-4 ml-2 align-items-center">{title}</h2>
            <Form onSubmit={sendForm()} className="justify-content-center flex-column" inline>
                <Form.Group className="mb-3 d-flex flex-column justify-content-center" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Leave a comment</Form.Label>
                    <Form.Control onChange={(e) => inputHandler('comment', e.target.value)} value={userReview1.comment} required as="textarea" rows={4} style={{
                        width: "250px"
                    }} />
                </Form.Group>
                <div className="d-flex mb-4">
                    <StarRatings
                        rating={userReview1.rate}
                        starRatedColor="yellow"
                        starHoverColor="yellow"
                        starEmptyColor="rgb(129 129 129)"
                        changeRating={getRate}
                        numberOfStars={5}
                        name='rating'
                        starDimension="26px"
                        starSpacing="6px"
                        required
                    />
                </div>
                <Button type="submit" variant="info">Add a comment</Button>
            </Form>

        </div>
    )

}
export default AddComment