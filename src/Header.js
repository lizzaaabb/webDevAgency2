import React, { useState, useEffect } from 'react'; 
import './Header.css'
//import CircleType from 'circletype';  // This is for the npm package
//import $ from 'jquery';  // This imports jQuery correctly


const coverImage = '/cover1.png'; // Note: No `public/` folder needed
const logoImage = '/thin-arrow.png';
const phoneBackground = '/forphone.png';




function Header() {

    const [rotatedText, setRotatedText] = useState([]);
    const [isMobile, setIsMobile] = useState(false); 

useEffect(() => {
  const text = " SCROLL TO EXPLORE  SCROLL TO EXPLORE  SCROLL TO EXPLORE  ";
  const letters = text.split("");
  
  setRotatedText(letters);
}, []);


useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
  
    handleResize();
    window.addEventListener('resize', handleResize);
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const backgroundImage = isMobile ? `url(${phoneBackground})` : `url(${coverImage})`;
  

  return (
    <div className='body'  style={{
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'}}
    > 

    <div className="header-container">
        <div className="first-block">
            <a href="#">About</a>
            <a href="#">Services</a>
        </div>
        <div className="second-block">
            <h4 className='header-title'>CODIFY</h4>
        </div>
        <div className="third-block">
            <a href="#">Cases</a>
            <a href="#">Contact</a>

        </div>
    </div>



    <div className='hero-body'>

        <div className="block1">
            <span>Digital</span>
            <span>Agency</span>

        </div>

        <div className="block2">
            <div className="first-title">
                <div className="first-title-container">
                    <h1 className='title1'>WE ARE</h1>
                </div>
                <div className="first-title-container2">
                    <h1 className='title2'>FULL-SERVICE</h1>
                </div>

            </div>
            <div className="second-title">
                <div className="second-title-container">
                    <h1 className='title3'>AGENCY</h1>
                </div>
                <div className="second-title-container2">
                    <span>The first full-stack Web3<br /> </span>
                    <span>creative agency integrating AI <br /></span>
                    <span>technology to deliver best-in -<br /></span>
                    <span>class clinet experience.</span>
                </div>
            </div>
        </div>

        <div className="block3">
            <img src="union.png" alt="arrow"  className='arrow'/>

        </div>
      
    </div>


        <div className="scroll-container">

        <div className="circle">

            <div className="logo-circle">
             <div
                className="logo"
                style={{ backgroundImage: `url(${logoImage})`, backgroundSize: 'cover' }}
                ></div>
            </div>
        
      <div className="text-container">
            <div className="text">
                {rotatedText.map((char, index) => (
              <span
                key={index}
                style={{
                transform: `rotate(${index * (360 / rotatedText.length)}deg) translateX(-50%)`,
               // marginRight: char === " " ? "20px" : "0",  // Ensure space between words
              
                 }}
                    >
                {char}
                </span>
                     ))}
            </div>
            </div>
</div>


        

        

        

        </div>
      
    </div>


  )
}

export default Header
