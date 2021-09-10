import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Berkeley Math Bootcamp</h1>
        <p>
          A 5-day mathematics intensive at the {' '}
          <a href="https://chemistry.berkeley.edu/home">UC Berkeley College of Chemistry</a>. Designed {' '}
          <br />
          by, designed for, and run by graduate students.{' '}
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('people')
            }}
          >
            People
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('content')
            }}
          >
            Content
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
