import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import StarRatings from 'react-star-ratings'

export default class AddComment extends Component {

    state = {
        userReview: {
            comment: '',
            rate: undefined,
            elementId: this.props.book.asin
        }

    }


    inputHandler = (key, value) => {
        this.setState({
            userReview: {
                ...this.state.userReview,
                [key]: value
            }
        })

    }
    getRate = (newRating) => {
        this.setState({
            userReview: {
                ...this.state.userReview,
                rate: newRating
            }
        })

    }

    sendForm = async (e) => {
        e.preventDefault()
        await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
            method: 'POST',
            body: JSON.stringify(this.state.userReview),
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA3YTRjZmY1ZjAwMTU5MGJkYjMiLCJpYXQiOjE2Mzk2NjI3NzEsImV4cCI6MTY0MDg3MjM3MX0.WBnZ0WMWPLNehQ44giJNdrKAD0SXGXeE12hsUECqeLg",
                "Content-Type": "application/json"
            }
        })

        this.setState({
            userReview: {
                ...this.state.userReview,
                comment: '',
                rate: undefined

            }
        })
        await this.props.getNewComments()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.book.asin !== prevProps.book.asin) {
            this.setState({
                userReview: {
                    ...this.state.userReview,
                    elementId: this.props.book.asin
                }
            })
        }
    }



    render() {
        return (
            <div className="ml-2">
                <h2 className="px-4 ml-2 align-items-center">{this.props.title}</h2>
                <Form onSubmit={this.sendForm} className="justify-content-center flex-column" inline>
                    <Form.Group className="mb-3 d-flex flex-column justify-content-center" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Leave a comment</Form.Label>
                        <Form.Control onChange={(e) => this.inputHandler('comment', e.target.value)} value={this.state.userReview.comment} as="textarea" rows={4} style={{
                            width: "300px"
                        }} />
                    </Form.Group>
                    <div className="d-flex mb-4">
                        <StarRatings
                            rating={this.state.userReview.rate}
                            starRatedColor="yellow"
                            starHoverColor="yellow"
                            starEmptyColor="rgb(129 129 129)"
                            changeRating={this.getRate}
                            numberOfStars={5}
                            name='rating'
                            starDimension="26px"
                            starSpacing="6px"
                        />
                    </div>
                    <Button type="submit" variant="outline-success">Add a comment</Button>
                </Form>

            </div>
        )
    }
}
