import React from 'react';


class forum extends React.Component {
    state = 
    {
        firstname:'',
        message:''


    }
    firstNameChange(firstname){
        this.setState({firstname})
    }
    messageChange(message){
        this.setState({message})
    }
    post(event){
        event.preventDefault();
        this.props.onPress(this.state)
        console.log(event.target)
        event.target.firstname.value = ''
        event.target.message.value = ''

    }
    
    render(){
        return(
            <form onSubmit = {(event)=>this.post(event)} >
                
                First Name:<input onChange={(event) =>this.firstNameChange(event.target.value)} type = 'text' name='firstname' />
                <br/>
                message:<textarea onChange={(event) => this.messageChange(event.target.value)} rows='5' cols='10' type = 'text' name='message'></textarea><br/>

                <button type = 'submit'  >Send</button>
                
                
            </form>
        )
    }
}
export default forum;