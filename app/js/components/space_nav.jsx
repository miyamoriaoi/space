import React from 'react';
import ReactDom from 'react-dom';
import SpaceNavTab from './space_nav_tab.jsx'

class SpaceNav extends  React.Component {
  getInitialState() {
    return {
      nowTabId: 1
    }
  }

  render() {
    return (
      <div>
        <SpaceNavTab name= "主页" />
        <SpaceNavTab name= "视频" />
        <SpaceNavTab name= "收藏" />
      </div>
    );
  }
}


export default SpaceNav
