import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

function Header() {
  return (
    <div className="jumbotron">
      <h1>StrNow</h1>
      <p>
        Get formated date and time
        <br/>
        <pre>YYYY-MM-DD HH:mm:ss</pre>
      </p>
      <p>
        <Button href="https://github.com/marceloxp/strnow/archive/master.zip" variant="primary">Download</Button>
      </p>
    </div>
  )
}

export default Header;
