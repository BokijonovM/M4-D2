import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import WarningSign from './WarningSign'
import { parseISO, format } from 'date-fns'

export default class CommentList extends Component {
    state = {
        commentExists: true,
    }

    removeComment = async (e) => {
        let deleteRes = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.reviewInfo._id, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA3YTRjZmY1ZjAwMTU5MGJkYjMiLCJpYXQiOjE2Mzk2NjI3NzEsImV4cCI6MTY0MDg3MjM3MX0.WBnZ0WMWPLNehQ44giJNdrKAD0SXGXeE12hsUECqeLg",
            }
        })

        let res = await deleteRes.json()
        console.log(res)

        this.setState({
            commentExists: false
        })

        setTimeout(() => this.props.getNewComments(), 3000)
    }
    render() {
        return (
            <>
                {!this.state.commentExists && <WarningSign className={this.state.alertClasses} text="Comment deleted Successfully" variant="success"></WarningSign>}
                {this.state.commentExists &&
                    <div className="my-3 ml-2">
                        <div>
                            <h6 className='mb-0' style={{
                                color: "grey",
                                fontSize: "20px"
                            }}>Comment</h6>
                            <p>{this.props.reviewInfo.comment}</p>
                        </div>
                        <div>
                            <h6 className='mb-0' style={{
                                color: "grey",
                                fontSize: "20px"
                            }}>Rate</h6>
                            <p>{this.props.reviewInfo.rate}</p>
                        </div>
                        <div>
                            <h6 className='mb-0' style={{
                                color: "grey",
                                fontSize: "20px"
                            }}>Date</h6>
                            {/* DateTime formatted */}
                            <p className="mb-2">
                                {format(parseISO(this.props.reviewInfo.createdAt), 'MMMM do yyyy | HH:mm')}
                            </p>
                        </div>

                        <Button variant="danger" onClick={() => this.removeComment()} >Delete Comment</Button>

                    </div>
                }
            </>
        )

    }
}

