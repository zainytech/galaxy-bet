import react from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// import logo from './assets/Artboard 5 copy 2.png'
import logo from './assets/logo.png'

import {AiOutlineMenu} from 'react-icons/ai';
import {RxCross1} from 'react-icons/rx';

function Header() {
  const [showText, setShowText] = useState('');
  const onClick = () => setShowText(!showText);
  return (
    <>
      <div class="nav">
    <div class="nav-container">
    <div class="nav-logo">
      <img src={logo}></img>
    </div>
    <div class="nav-items">
    <Link to='/' style={{textDecoration:'none', color:'#42210B'}}><div class=" nav-item1 nav-item1a">HOME</div></Link>
        {/* <div class="nav-items1-drop">
          <div class="nav-items-drop-1">
            Home 1
          </div>
          <div class="nav-items-drop-1">
            Home 2
          </div>
        </div> */}
      <div class="nav-item1">ABOUT US</div>
      <Link to='/stake' style={{textDecoration:'none', color:'#42210B'}}><div class="nav-item1">STAKE</div></Link>
      {/* <a href="https://stellar-vacherin-a09385.netlify.app/" style={{textDecoration:'none',color:'#42210B'}}><div class="nav-item1">STAKE</div></a> */}
      <div class="nav-item1">ROADMAP</div>
      {/* <div class="nav-item1 nav-item1b">BLOG</div>
      <div class="nav-items2-drop">
          <div class="nav-items2-drop-1">
            OUR BLOG
          </div>
          <div class="nav-items2-drop-1">
            BLOG DETAILS
          </div>
        </div> */}
      <div class="nav-item1">CONTACT US</div>
    </div>
    {/* <div class="nav-item-right"> */}
      {/* <div class="nav-lang">
        ENG<img src={downarrow}></img>
      </div>
      <div class="nav-lang-drop">
          <div class="nav-lang-drop-1">
            IND
          </div>
          <div class="nav-lang-drop-1">
            BNG
          </div>
          <div class="nav-lang-drop-1">
            TUR
          </div>
          <div class="nav-lang-drop-1">
            CIN
          </div>
        </div> */}
      <div class="nav-btn">
        <button>CONNECT WALLET</button>
      </div>
    {/* </div> */}
    <div onClick={onClick} class="front-nav-menu">
      {showText? <RxCross1 style={{cursor:'pointer',fontSize:'30px',color:'#42210B'}}/>
        : <AiOutlineMenu style={{cursor:'pointer',fontSize:'30px',color:'#42210B'}}/>}
    </div>
  </div>

  </div>
  {showText ? <Text /> : null}
    </>
  )
};

function Text(){
  return(
      <>
        <div class="front-nav-menu-div">
    <div class="front-resp-nav-items ">
    <Link to='/' style={{textDecoration:'none', color:'#42210B'}}><span class="front-resp-nav-item1">HOME</span></Link>
        <span class="front-resp-nav-item1">ABOUT US</span>
        <Link to='/stake' style={{textDecoration:'none', color:'#42210B'}}><span class="front-resp-nav-item1">STAKE</span></Link>
        <span class="front-resp-nav-item1">ROADMAP</span>
        <span class="front-resp-nav-item1">CONTACT US</span>

    </div>
</div>
      </>
  )
};
export default Header