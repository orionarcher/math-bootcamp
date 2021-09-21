import PropTypes from 'prop-types'
import React from 'react'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import blackboard from '../images/true-blackboard.jpg'
import gs from '../images/gatsby-icon.png'
import Content from './Content';
import People from './People'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={blackboard} alt="" />
          </span>
          <p>
          Graduate level physical chemistry requires more math than the typical undergraduate
          program teaches. As a result, many students struggle in their first semester of 
          classes. The organizers of the bootcamp, who both took and taught the introductory
          graduate classes, experienced this first hand. The content hosted on this website
          was designed as part of a five-day mathematics bootcamp for first year chemistry
          graduate students to help build students’ skills and confidence in solving 
          undergraduate-level math problems relevant for physical chemistry. 
          </p>
          {close}
        </article>

        <article
          id="people"
          className={`${this.props.article === 'people' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <People></People>
          {close}
        </article>

        <article
          id="content"
          className={`${this.props.article === 'content' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <Content></Content>

          {close}
        </article>


        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>
            Contact the organizers of the bootcamp at <u>ucbmathbootcamp@gmail.com</u>. We'd love to 
            hear from you!
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
