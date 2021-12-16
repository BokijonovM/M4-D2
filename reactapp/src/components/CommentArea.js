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
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA3YTRjZmY1ZjAwMTU5MGJkYjMiLCJpYXQiOjE2Mzk2NjI3NzEsImV4cCI6MTY0MDg3MjM3MX0.WBnZ0WMWPLNehQ44giJNdrKAD0SXGXeE12hsUECqeLg",
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

            (<Card className="justify-content-center bg-transparent border-0">
                {this.state.errorHandle && <WarningSign variant="danger" text="Sorry try again in a bit"></WarningSign>}
                <h2>{this.state.bookTitle}</h2>
                <Card.Img className="imageFixBig" variant="top" src={this.props.book.img}>
                </Card.Img>
                {this.state.isLoading && (<Loading></Loading>)}
                {this.state.remainingComments ?
                    (this.state.commentList.map(comment => <CommentList getNewComments={this.getComments} key={comment._id} reviewInfo={comment}></CommentList>))
                    : (<p className="mt-3 text-center">No comments to display</p>)}
                <AddComment getNewComments={this.getComments} book={this.props.book}></AddComment>

            </Card>)

        )
    }
}
