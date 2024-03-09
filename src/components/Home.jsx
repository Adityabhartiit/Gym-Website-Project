import React from 'react'
import './Home.css'
import Header from './Header/Header'
import heart from '../assets/heart.png'
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import calories from '../assets/calories.png'
import NumberCounter from 'number-counter'
import { motion} from 'framer-motion'
const Home = () => {
const transition = {type:'spring' , duration : 3}

  return (
 <div className="home">
  

    <div className="left">
        <Header/>



        <div className="the-best-ad">
        <motion.div className='stroke-text span-left-to-right' >

        </motion.div>
        <span>the best fintess club in the town</span>
        </div>

    <div className="hero-text">

    <div>
        <span className='stroke-text'>Shape</span>
        <span> Your</span>
    </div>
    <div>
     <span>Ideal body</span>
    </div>
    <div>
    <span className="by-me"> In here we will help you to shape and build your ideal live up your life to fullest</span>
    </div>



    </div>
<div className="figures">
    <div><span  ><NumberCounter end={140} start={100} dealy='4' /></span><span>expert coachs</span></div>
    <div><span><NumberCounter end={2340}start={2000}dealy='4'/></span><span>members Joined</span></div>
    <div><span><NumberCounter end={50} start={30} dealy='4' preFix="+"/></span><span>fitness programs</span></div></div>
    

    

{/* Hero button */}
<div className="hero-buttons">
    <button className="btn"> Get Started</button>
    <button className="btn"> Learn More</button>
</div>


    </div>
    <div className="right">


    <button className='btn'>Join  Now</button>
    <motion.div 
    initial={{right:"-1rem"}}
    whileInView={{right:"3.5rem"}}
    transition={transition}
    className="heart-rate " >
    <img src={heart} alt='' className='heart-image'/>
    <span> Heart Rate</span>
    <span>116 bpm</span>
    </motion.div>
    <img src={hero_image} alt="" className='hero-image' />
    <motion.img
        initial={{right:"11rem"}}
        whileInView={{right:"20rem"}}
        transition={transition}
    
    src={hero_image_back} alt="" className='hero-image-back' />
    <motion.div 
    
    initial={{right:"37rem"}}
    whileInView={{right:"28rem"}}
    transition={transition}
    
    className="calories">
        <img src={calories} alt=''/>
<div>
       <span> Calories Burned</span>
        <span>320 kcal</span>
</div>
    </motion.div>
    </div>
  
 </div>


  )
}

export default Home
