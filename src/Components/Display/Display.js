import React from 'react';
import Show from '../Show/Show';


class Display extends React.Component{
    render(){
        let comments = []
        this.props.comments.forEach(comment => {
            console.log(comment)
            comments.push(<Show firstname = {comment.firstname} comment = {comment.message} ></Show>)

        });
        return(
            <div>
               {comments} 

            </div>
        )   
    }
}
export default Display