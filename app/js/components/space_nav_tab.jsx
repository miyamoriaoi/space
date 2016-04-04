import React from 'react';
import ReactDom from 'react-dom';

class SpaceNavTab extends React.Component {
  render(){
    return(
      <div>
        <span>{this.props.name}</span>
      </div>
    );
  }
}


export default SpaceNavTab;
