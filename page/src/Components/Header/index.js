import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './style.css';

export default class Header extends React.Component {
  render(){
  return (
    <Jumbotron className="jumbotron">
      <h1>StwNow</h1>
      <p>
        Get formated date and time (YYYY-MM-DD HH:mm:ss)
      </p>
      <p>
        <Button href="https://github.com/marceloxp/strnow/archive/master.zip" variant="primary">Download</Button>
      </p>
    </Jumbotron>)
  }
}