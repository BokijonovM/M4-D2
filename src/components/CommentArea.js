// import { Component } from 'react'
import { Card } from 'react-bootstrap'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import WarningSign from './WarningSign'
import { useState, useEffect } from 'react'


const CommentArea = ({ props }) => {
    // state = {
    //     commentList: [],
    //     isLoading: true,
    //     errorHandle: false,
    //     bookTitle: 'Trending...'
    // }
    const [commentList, setCommentList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorHandle, setErrorHandle] = useState(false)
    const [bookTitle, setBookTitle] = useState('Trending...')
    const [remainingComments, setRemainingComments] = useState(0)

    useEffect(() => {
        getComments()
    }, [this.props.title])

    // componentDidMount = () => {
    //     this.getComments()
    // }

    const getComments = async () => {
        try {

            let commentsRes = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.book.asin, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA3YTRjZmY1ZjAwMTU5MGJkYjMiLCJpYXQiOjE2NDE4MjAzMTYsImV4cCI6MTY0MzAyOTkxNn0.QvedsvE9IU4Q5gdIA4tTz8ZM2S62dDJvq2GVMZKUYbE",
                }
            })

            if (commentsRes.ok) {

                let comments = await commentsRes.json()
                setCommentList([...comments])
                setIsLoading(false)
                setRemainingComments(remainingComments.length)

                // this.setState({
                //     commentList: [...comments],
                //     isLoading: false,
                //      remainingComments: remainingComments.lenth
                // })
            } else {
                setCommentList([])
                setIsLoading(false)
                setErrorHandle(true)

                // this.setState({
                //     commentList: [],
                //     isLoading: false,
                //     errorHandle: true

                // })

            }

        } catch (err) {
            setErrorHandle(true)
            setIsLoading(false)
            setCommentList([])
        }

    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.book.title !== prevProps.book.title) {
    //         this.getComments()
    //         this.setState({
    //             commentList: [...commentList],
    //             isLoading: false,
    //             bookTitle: this.props.book.title,
    //             errorHandle: false,
    //         })
    //     }
    // }



    return (

        (<Card className="justify-content-center bg-transparent mt-5 border-0">
            {errorHandle && <WarningSign variant="danger" text="Sorry try again in a bit"></WarningSign>}

            <Card.Img className="imageFixBig" variant="top" style={{
                marginTop: "166px",
                height: "500px",
                objectFit: "cover"
            }} src={this.props.book.img}>

            </Card.Img>
            <h2 className="my-3">{bookTitle}</h2>
            {isLoading && (<Loading></Loading>)}
            {setRemainingComments ?
                (commentList.map(comment => <CommentList getNewComments={getComments} key={comment._id} reviewInfo={comment}></CommentList>))
                : (<p className="mt-3 text-center">No comments to display</p>)}
            <AddComment getNewComments={getComments} book={props.book}></AddComment>

        </Card>)

    )

}
export default CommentArea