import React from 'react';
import commentsService from "../../commentsService"
import './forum.css'

class forum extends React.Component {
    state = {
        username:'',
        comments:''
    }
    firstNameChange(username){
        this.setState({username})
    }
    messageChange(comments){
        this.setState({comments})
    }
    post(event){
        event.preventDefault();
        const {username, content} = event.target
        commentsService.postComments(this.state.username, this.state.comments)
        .then(result =>{
            username.value = ''
            content.value = ''
            this.props.onPress(result)
        })
    }
    
    render(){
        return(
            <form onSubmit = {(event)=>this.post(event)} className = 'form'>
                
                Username: <input onChange={(event) =>this.firstNameChange(event.target.value)} type = 'text' name='username' />
                <br/>
                Message: <textarea onChange={(event) => this.messageChange(event.target.value)} rows='2' cols='10' type = 'text' name='content'></textarea><br/>

                <button type = 'submit' >Send</button>
                
            </form>
        )
    }
}
export default forum;