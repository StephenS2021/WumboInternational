import React from 'react';
import Show from '../Show/Show';
import './display.css'


class Display extends React.Component{
    render(){
        let comments = []
        this.props.comments.forEach(comment => {
            console.log(comment)
            comments.push(<Show firstname = {comment.username} comment = {comment.content} ></Show>)

        });
        return(
            <div className = "messageText">
               {comments} 

            </div>
        )   
    }
}
export default Display