import React, { useState } from "react";
import { Link } from 'react-scroll'
import Avatar from 'react-avatar'
import Container from 'react-bootstrap/Container'
import './HomeStyles.css';

const Home = () => {
  const [nav, setNav] = useState(false)

  const handleClose = () => {
    setNav(!nav)
  }

  return (
    <div name='home' className='home'>
      <div className="container">
        <div className="top">
          <div className="card">

              <h1>Romeo & Juliet</h1>

              <Avatar facebookId="100008343750912" size="150" round={true} />
              <br />
              <h1>Kepada Yth.</h1>
              <h1>Tamu Undangan</h1>
              <h2>mohon maaf bila ada kesalahan dalam penulisan nama/ gelar.</h2>
              <button className="btn btn-dark">
                <Link onClick={handleClose} activeClass="active" to="page1" spy={true} smooth={true} duration={500}>Buka Undangan</Link>
              </button>

          </div>
        </div>
        <div className="bottom">

        </div>
      </div>
    </div>
  )
}

export default Home