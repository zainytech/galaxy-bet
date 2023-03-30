import react from 'react'
import './Footer.css';

// import logo from './assets/Artboard 5 copy 2.png'
import logo from './assets/logo.png'
import {AiOutlineTwitter} from 'react-icons/ai';
import {BsTwitch} from 'react-icons/bs';
import {ImReddit} from 'react-icons/im';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaPaperPlane} from 'react-icons/fa';

function Footer() {
  return (
    <>

<div class="footer">
  <div class="footer-container">
    <div class="footer-a">
    <div class="footer-a-div1">
      <div class="footer-a-div1a">
        <div class="footer-a-div1a-img"><img src={logo}></img></div>
      </div>
      <div class="footer-a-div1b">
      A new way to make the payments easy, reliable and 100% secure. claritatem itamconse quat. Exerci tationulla
      </div>
      <div class="front-main6-div2b">
        <span class='front-main6-icon'><AiOutlineTwitter style={{color:'#2c1b12',padding:'0.5rem',fontSize:'22px'}}/></span>
        <span class='front-main6-icon'><BsTwitch style={{color:'#2c1b12',padding:'0.5rem',fontSize:'22px'}}/></span>
        <span class='front-main6-icon'><ImReddit style={{color:'#2c1b12',padding:'0.5rem',fontSize:'22px'}}/></span>
        <span class='front-main6-icon'><AiOutlineInstagram style={{color:'#2c1b12',padding:'0.5rem',fontSize:'22px'}}/></span>
      </div>
    </div>

    <div class="footer-a-div2">
      <div class="footer-a-div2a">USEFUL LINKS</div>
      <div class="footer-a-div2b">
        <p>Contact Us</p>
        <p>How it works</p>
        <p>create</p>
        <p>Explore</p>
        <p>Terms & Services</p>
      </div>
    </div>

    <div class="footer-a-div2">
      <div class="footer-a-div2a">COMMUNITY</div>
      <div class="footer-a-div2b">
        <p>Help Center</p>
        <p>Partners</p>
        <p>create</p>
        <p>Explore</p>
        <p>Terms & Services</p>
      </div>
    </div>

      <div class='footer-a-div3'>
        <div class="footer-a-div2a">SUBSCRIBE NEWSLETTER</div>
        <div class="footer-a-div1b">Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo</div>
        <div class="front-main6-div1b">
          <input type="text" placeholder='info@gmail.com'></input>
          <span class='footer-plane-icon'><FaPaperPlane style={{color:'#FBC225',fontSize:'30px'}}/></span>
        </div>
      </div>

    </div>
    <div class="footer-b">
      <div class="footer-b-div1">Copyright © 2022. All Rights Reserved Bigtech</div>
      <div class="footer-b-div2">
        <div class="footer-b-div2a">Terms and conditions</div>
        <div class="footer-b-div2b">Privacy Policy</div>
        <div class="footer-b-div2c">Login/Signup</div>
      </div>
    </div>

  </div>
</div>
    </>
  )
};
export default Footer