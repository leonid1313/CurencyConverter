import React from 'react';
import './About.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function About ({
  ...props
}) {
    return (
      <div>
        <Link 
          className="link-back"
          to={{
            pathname: `/`,
          }}
        >
          Dashboard
        </Link>
        <div>
          <h2>
            Current exchange rate
          </h2>
          <p>Base currency EUR</p>
          <div className="list">
            <ul>
              {Object.keys(props.history.location.state).map((value) => <li className="name"> {value} </li>)}
            </ul>
            <ul>
              {Object.values(props.history.location.state).map((value) => <li className="value"> {value} </li>)}
            </ul>
          </div>
        </div>
      </div>
    )
}

export default About;