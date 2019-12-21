import React from 'react';
import Show from '../Show/Show';


class Display extends React.Component{
    render(){
        let comments = []
        this.props.comments.forEach(comment => {
            console.log(comment)
            comments.push(<Show firstname = {comment.username} comment = {comment.content} ></Show>)

        });
        return(
            <div>
               {comments} 

            </div>
        )   
    }
}
export default Display