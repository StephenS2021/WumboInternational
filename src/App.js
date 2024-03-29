import React from 'react';
import logo from './logo.svg';
import './App.css';
import Forum from './Components/Forum/Forum'
import Display from './Components/Display/Display'
import commentsService from './commentsService'

class App extends React.Component {
  state = {
    comments:[]
  }
  changeComments = (comment) =>{
    console.log(this);
    let comments = this.state.comments
    comments.push(comment)
    this.setState({comments})
    
  }

  componentDidMount(){
    commentsService.getComments()
    .then(result =>
      this.setState({
        comments: result
      })
      )
  }
  render(){

  return (
    <div className="App">
      
      <Forum onPress={this.changeComments} />
      <Display comments = {this.state.comments}/>
    </div>
  );
  }
}

export default App;
