import react from 'react'
import './Home.css';
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

// import logo from './assets/Artboard 5 copy 2.png'
import logo from './assets/logo.png'
import bannerbg1 from './assets/bchain.jpg'
import bannerbg2 from './assets/banner-bg-2.jpg'
import bannerball1 from './assets/banner-ball1.png'
import fire from './assets/fire.png'
import bitcoin from './assets/bitcoin.png'
import icon1 from './assets/icon1.svg'
import icon2 from './assets/icon2.svg'
import icon3 from './assets/icon3.svg'
import icon4 from './assets/icon4.svg'
import rings from './assets/rings.png'
import mobile from './assets/mobile.png'




import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay} from "swiper";
import 'swiper/css/autoplay';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

function Home() {
  const [showtexthomefaloc, setShowtexthomefaloc] = useState(true);
  const onClickhomefaloc = ()=>{
      setShowtexthomefaloc(true);
      setShowtexthometaloc(false);

  };
  const [showtexthometaloc, setShowtexthometaloc] = useState('');
  const onClickhometaloc = ()=>{
      setShowtexthometaloc(true);
      setShowtexthomefaloc(false);
      
  };
  return (
    <>
{/* <div class="home-main"> */}
<Header/>
<div class="home-main">

<div class="home-main1">
  <div class="home-main-bg">
    <img src={bannerbg1}></img>
  </div>
  <div class="home-main-ball-img1">
    <img src={bannerball1}></img>
  </div>
  <div class="home-main-ball-img2">
    <img src={bannerball1}></img>
  </div>
  <div class="home-main-ball-img3">
    <img src={bannerball1}></img>
  </div>
  <div class='home-main-content'>
  <div class='home-main-content-container'>

  <div class="home-main-div1"><img src={fire}></img></div>
  <div class="home-main-div2">
  Join Future Of Algorithmic <span class="home-main-div2-txt-blue">Crypto</span> Trading Strategies
  </div>
  {/* <div class="home-main-div3">
    <div class='home-main-div3a'>
      <div class="home-main-div3a-1">
        <div class="home-main-div3a-1a home-main-div3a-1a-color-blue">
        PRE SELL
        <div class="home-main-div3a-1b home-main-div3a-1b-color-blue"></div>
        </div>
      </div>
      <div class="home-main-div3a-2">
        <div class="home-main-div3a-1a home-main-div3a-1a-color-brown">
        SOFT CAP
        </div>
        <div class="home-main-div3a-1b home-main-div3a-1b-color-brown"></div>
      </div>
      <div class="home-main-div3a-3">
        <div class="home-main-div3a-1a home-main-div3a-1a-color-green">
        BONUS
        </div>
        <div class="home-main-div3a-1b home-main-div3a-1b-color-green"></div>
      </div>
    </div>
    <div class="home-main-div3b">
    <ProgressBar completed={65} bgColor="#00C4F4"/>
    </div>
    <div class="home-main-3c">
      <span class="home-main-3c-txt1">65% TARGET RAISED</span>
      <span class="home-main-3c-txt2">1 ETH = $1000 = 3177.38 CIC</span>
    </div>
  </div> */}

  {/* <div class="home-main-4">
    <span class="home-main-4-heading-txt">ICO Will Start In..</span>
    <div class="home-main-4a">
      <div class="home-main-4a-div1">
        <span class="home-main-4a-div1-txt1 home-main-div3a-1a-color-blue">00</span>
        <span class="home-main-4a-div1-txt2">Days</span>
      </div>
      <div class="home-main-4a-div1">
        <span class="home-main-4a-div1-txt1 home-main-div3a-1a-color-brown">00</span>
        <span class="home-main-4a-div1-txt2">Hours</span>
      </div>
      <div class="home-main-4a-div1">
        <span class="home-main-4a-div1-txt1 home-main-4a-div1-txt1-color-red">00</span>
        <span class="home-main-4a-div1-txt2">Minute</span>
      </div>
      <div class="home-main-4a-div1">
        <span class="home-main-4a-div1-txt1 home-main-div3a-1a-color-green">00</span>
        <span class="home-main-4a-div1-txt2">Second</span>
      </div>
    </div>

</div> */}

  </div>
  </div>
  </div>
<div class="home-main2">
<div class="home-main2-ball-img2">
    <img src={bannerball1}></img>
  </div>
  <div class="home-main2-container">
    <div class="home-main2a">
      <div class="home-main2a-img flip-img"><img src={bitcoin}></img></div>
    </div>
    <div class="home-main2b">
        <div class="home-main2b-div1"><span class="home-div-circle"></span>WHO WE ARE<span class="home-div-circle"></span></div>
        <div class='home-main2b-div2'>The World’s <span class="home-main-div2-txt-blue">1st ICO</span> Platform That Offers Rewards</div>
        <div class="home-main2b-div3">The World’s 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens</div>
        <div class="home-main2b-div4"><button>PURCHASE TOKENS</button></div>
    </div>
  </div>
</div>
{/* <img src={imgg}></img> */}
<div class="home-main3">
  <div class="home-main3-container">
  <div class="home-main3-heading">
    <div class="home-main2b-div1"><span class="home-div-circle"></span>WHY CHOOSE US<span class="home-div-circle"></span></div>
    <div class="home-main2b-div2">Why Choose Our Bigtech <span class="home-main-div2-txt-blue">Token</span></div>
  </div>
  <div class="home-main3-slider">
  <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination,  Autoplay]} autoplay={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="home-main3-slider-container">
            <div class="home-main3-slider-div1">
              <div class="home-main3-slider-div1-img"><img src={icon1}></img></div>
            </div>
            <div class="home-main3-slider1-div2">
              Lifetime free transaction
            </div>
            <div class="home-main3-slider1-div3">
              Add new, trending and rare artwork to your collection.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="home-main3-slider-container">
            <div class="home-main3-slider-div1">
              <div class="home-main3-slider-div1-img"><img src={icon2}></img></div>
            </div>
            <div class="home-main3-slider1-div2">
              Lifetime free transaction
            </div>
            <div class="home-main3-slider1-div3">
              Add new, trending and rare artwork to your collection.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="home-main3-slider-container">
            <div class="home-main3-slider-div1">
              <div class="home-main3-slider-div1-img"><img src={icon3}></img></div>
            </div>
            <div class="home-main3-slider1-div2">
              Lifetime free transaction
            </div>
            <div class="home-main3-slider1-div3">
              Add new, trending and rare artwork to your collection.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="home-main3-slider-container">
            <div class="home-main3-slider-div1">
              <div class="home-main3-slider-div1-img"><img src={icon4}></img></div>
            </div>
            <div class="home-main3-slider1-div2">
              Lifetime free transaction
            </div>
            <div class="home-main3-slider1-div3">
              Add new, trending and rare artwork to your collection.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="home-main3-slider-container">
            <div class="home-main3-slider-div1">
              <div class="home-main3-slider-div1-img"><img src={icon3}></img></div>
            </div>
            <div class="home-main3-slider1-div2">
              Lifetime free transaction
            </div>
            <div class="home-main3-slider1-div3">
              Add new, trending and rare artwork to your collection.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="home-main3-slider-container">
            <div class="home-main3-slider-div1">
              <div class="home-main3-slider-div1-img"><img src={icon4}></img></div>
            </div>
            <div class="home-main3-slider1-div2">
              Lifetime free transaction
            </div>
            <div class="home-main3-slider1-div3">
              Add new, trending and rare artwork to your collection.
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
  </div>
</div>
</div>
<div class="home-main4">
  <div class="home-main4-bg">
    <img src={bannerbg1}></img>
  </div>
  <div class="home-main4-content">
    <div class="home-main4-content-container">
    <div class="home-main4a">
      <div class="home-main4a-div1">
        <div class="home-main4a-div1a" onClick={onClickhomefaloc} className={showtexthomefaloc? 'home-main4a-div1a-onclick':'home-main4a-div1a'}>FUNDING ALLOCATION</div>
        <div class="home-main4a-div1a" onClick={onClickhometaloc} className={showtexthometaloc? 'home-main4a-div1a-onclick':'home-main4a-div1a'}>TOKEN ALLOCATION</div>
      </div>
      {showtexthomefaloc? 
        <>
        <div class="home-main4a-div2">
          <div class="home-main4a-div2a">1 GCT = 0.0863 BTC</div>
          <div class="home-main4a-div2b">The World’s 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens</div>
          <div class="home-main4a-div2c"><button>BUY NOW</button></div>
        </div>
        </>
        :null
      }
      {showtexthometaloc? 
        <>
        <div class="home-main4a-div2">
          <div class="home-main4a-div2a">2 GCT = 0.0967 BTC</div>
          <div class="home-main4a-div2b">The World’s 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens</div>
          <div class="home-main4a-div2c"><button>BUY NOW</button></div>
        </div>
        </>
        :null
      }
      
    </div>
    <div class="home-main4b">
      <div class="home-main4b-div1">
        <div class="home-main4b-div1-img"><img src={rings}></img></div>
      </div>
      <div class="home-main4b-div2">
        {/* <div class="home-main4b-div2a"> */}
          <div class="home-main4b-div2a-div1">
            <span class="home-main4b-div2a-div1-circle home-main4b-div2a-div1-circle1"></span>
            <span class="home-main4b-div2a-div1-txt">Contingency: 70%</span>
          </div>
          <div class="home-main4b-div2a-div1">
            <span class="home-main4b-div2a-div1-circle home-main4b-div2a-div1-circle2"></span>
            <span class="home-main4b-div2a-div1-txt">Investor: 30%</span>
          </div>
          <div class="home-main4b-div2a-div1">
            <span class="home-main4b-div2a-div1-circle home-main4b-div2a-div1-circle3"></span>
            <span class="home-main4b-div2a-div1-txt">Legal & Regulation:10%</span>
          </div>
        
          <div class="home-main4b-div2a-div1">
            <span class="home-main4b-div2a-div1-circle home-main4b-div2a-div1-circle4"></span>
            <span class="home-main4b-div2a-div1-txt">Contingency: 70%</span>
          </div>
          <div class="home-main4b-div2a-div1">
            <span class="home-main4b-div2a-div1-circle home-main4b-div2a-div1-circle5"></span>
            <span class="home-main4b-div2a-div1-txt">Investor: 30%</span>
          </div>
          <div class="home-main4b-div2a-div1">
            <span class="home-main4b-div2a-div1-circle home-main4b-div2a-div1-circle6"></span>
            <span class="home-main4b-div2a-div1-txt">Legal & Regulation:10%</span>
          </div>
          </div>
      {/* </div> */}
    </div>
  </div>
  </div>
</div>

<div class="home-main5">
  <div class="home-main5-container">
  <div class="home-main5-heading">
    <div class="home-main2b-div1"><span class="home-div-circle"></span>OUR ROADMAP<span class="home-div-circle"></span></div>
    <div class="home-main2b-div2">Bigtech Strategy And Project <span class="home-main-div2-txt-blue">Plan</span></div>
  </div>

  <div class="home-main5-content">
      <div class="home-main5-div1">

      <div class="home-main5-div1a home-main5-div1a-blue">
          <div class="home-main5-div1a-div1">Research</div>
          <div class="home-main5-div1a-div2">
            SubQuery Builders/Grants Program<br/>
            SQT Network contract internal MVP<br/>
            Coordinator and client SDK
          </div>
          <div class="home-main5-div1a-div3 home-main5-div1a-div3-blue">MID OF Q4 2021</div>
        </div>
        <div class="home-main5-div1a home-main5-div1a-pink">
          <div class="home-main5-div1a-div1">Research</div>
          <div class="home-main5-div1a-div2">
            SubQuery Builders/Grants Program<br/>
            SQT Network contract internal MVP<br/>
            Coordinator and client SDK
          </div>
          <div class="home-main5-div1a-div3 home-main5-div1a-div3-pink">MID OF Q4 2021</div>
        </div>
        <div class="home-main5-div1a home-main5-div1a-green">
          <div class="home-main5-div1a-div1">Research</div>
          <div class="home-main5-div1a-div2">
            SubQuery Builders/Grants Program<br/>
            SQT Network contract internal MVP<br/>
            Coordinator and client SDK
          </div>
          <div class="home-main5-div1a-div3 home-main5-div1a-div3-green">MID OF Q4 2021</div>
        </div>
        
        <div class="home-main5-div1a home-main5-div1a-brown">
          <div class="home-main5-div1a-div1">Research</div>
          <div class="home-main5-div1a-div2">
            SubQuery Builders/Grants Program<br/>
            SQT Network contract internal MVP<br/>
            Coordinator and client SDK
          </div>
          <div class="home-main5-div1a-div3 home-main5-div1a-div3-brown">MID OF Q4 2021</div>
        </div>
      {/* </div>
      <div class="home-main5-div2"> */}
      <div class="home-main5-div1a home-main5-div1a-brown">
          <div class="home-main5-div1a-div1">Research</div>
          <div class="home-main5-div1a-div2">
            SubQuery Builders/Grants Program<br/>
            SQT Network contract internal MVP<br/>
            Coordinator and client SDK
          </div>
          <div class="home-main5-div1a-div3 home-main5-div1a-div3-brown">MID OF Q4 2021</div>
        </div>
        <div class="home-main5-div1a home-main5-div1a-green">
          <div class="home-main5-div1a-div1">Research</div>
          <div class="home-main5-div1a-div2">
            SubQuery Builders/Grants Program<br/>
            SQT Network contract internal MVP<br/>
            Coordinator and client SDK
          </div>
          <div class="home-main5-div1a-div3 home-main5-div1a-div3-green">MID OF Q4 2021</div>
        </div>
        <div class="home-main5-div1a home-main5-div1a-pink">
          <div class="home-main5-div1a-div1">Research</div>
          <div class="home-main5-div1a-div2">
            SubQuery Builders/Grants Program<br/>
            SQT Network contract internal MVP<br/>
            Coordinator and client SDK
          </div>
          <div class="home-main5-div1a-div3 home-main5-div1a-div3-pink">MID OF Q4 2021</div>
        </div>
        <div class="home-main5-div1a home-main5-div1a-blue">
          <div class="home-main5-div1a-div1">Research</div>
          <div class="home-main5-div1a-div2">
            SubQuery Builders/Grants Program<br/>
            SQT Network contract internal MVP<br/>
            Coordinator and client SDK
          </div>
          <div class="home-main5-div1a-div3 home-main5-div1a-div3-blue">MID OF Q4 2021</div>
        </div>

      </div>
  </div>
</div>
</div>

<div class="home-main6">
  <div class="home-main6-bg">
    <img src={bannerbg1}></img>
  </div>
  <div class="home-main6-content">
  <div class="home-main6-content-container">
  <div class="home-main2a">
      <div class="home-main2a-img"><img src={mobile}></img></div>
    </div>
    <div class="home-main2b">
        <div class="home-main2b-div1"><span class="home-div-circle"></span>WHITEPAPER<span class="home-div-circle"></span></div>
        <div class='home-main2b-div2'>Read Bigtech <span class="home-main-div2-txt-blue">Documents</span></div>
        <div class="home-main6b-div3">
          <ul>
            <li>White Paper</li>
            <li>Privaci & Policy</li>
            <li>Terms Of Coin Sale</li>
            <li>One Pager</li>
          </ul>
        </div>
        <div class="home-main2b-div4"><button>DOWNLOAD DOC</button></div>
    </div>
  </div>
  </div>
</div>

<Footer/>
</div>



{/* </div> */}
    </>
  );
}

export default Home;