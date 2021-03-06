import { Component } from 'react'
import { Card } from 'react-bootstrap'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import WarningSign from './WarningSign'


export default class CommentArea extends Component {
    state = {
        commentList: [],
        isLoading: true,
        errorHandle: false,
        bookTitle: 'Trending...'
    }

    componentDidMount = () => {
        this.getComments()
    }

    getComments = async () => {
        try {

            let commentsRes = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.book.asin, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA3YTRjZmY1ZjAwMTU5MGJkYjMiLCJpYXQiOjE2NDE4MjAzMTYsImV4cCI6MTY0MzAyOTkxNn0.QvedsvE9IU4Q5gdIA4tTz8ZM2S62dDJvq2GVMZKUYbE",
                }
            })

            if (commentsRes.ok) {

                let comments = await commentsRes.json()
                this.setState({
                    commentList: [...comments],
                    isLoading: false,
                    remainingComments: comments.length
                })
            } else {
                this.setState({
                    commentList: [],
                    isLoading: false,
                    errorHandle: true

                })

            }

        } catch (err) {

        }

    }

    componentDidUpdate(prevProps) {
        if (this.props.book.title !== prevProps.book.title) {
            this.getComments()
            this.setState({
                commentList: [...this.state.commentList],
                isLoading: false,
                bookTitle: this.props.book.title,
                errorHandle: false,
            })
        }
    }


    render() {
        return (

            (<Card className="justify-content-center bg-transparent mt-5 border-0">
                {this.state.errorHandle && <WarningSign variant="danger" text="Sorry try again in a bit"></WarningSign>}

                <Card.Img className="imageFixBig" variant="top" style={{
                    marginTop: "166px",
                    height: "500px",
                    objectFit: "cover"
                }} src={this.props.book.img}>

                </Card.Img>
                <h2 className="my-3">{this.state.bookTitle}</h2>
                {this.state.isLoading && (<Loading></Loading>)}
                {this.state.remainingComments ?
                    (this.state.commentList.map(comment => <CommentList getNewComments={this.getComments} key={comment._id} reviewInfo={comment}></CommentList>))
                    : (<p className="mt-3 text-center">No comments to display</p>)}
                <AddComment getNewComments={this.getComments} book={this.props.book}></AddComment>

            </Card>)

        )
    }
}
