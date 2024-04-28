import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="banner">
            <div className="top">
            <h1 className="heading"> ABOUT US  </h1>

            <p>The only thing we are serious about is Food</p>
            </div>
            <p className='mid'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam natus saepe at soluta ut perspiciatis, omnis odio, architecto quam, sit fuga! Quo dignissimos numquam asperiores odit, nihil in magni perferendis consectetur placeat esse doloremque vel aliquid libero eaque, et iste nesciunt atque inventore delectus illum perspiciatis nostrum iure mollitia. Alias.</p>
            <Link to={"/"}  onClick={() => {
  const menuSection = document.getElementById('menu');
  menuSection.scrollIntoView({ behavior: 'smooth' });}}>
            Explore Menu <span>    <HiOutlineArrowNarrowRight/> </span>
            </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  )
}

export default About