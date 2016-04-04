import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link } from 'react-router'
import SpaceNav from './components/space_nav.jsx'
ReactDom.render(
  <div>
    <SpaceNav />
  </div>,
  document.getElementById("space-app")
)


