import React from 'react';

class Show extends React.Component{
    render(){
        return(
            <div>
                <br />
                
                {this.props.firstname}: {this.props.comment}
                <br />
            </div>
        )
    }

}
 export default Show