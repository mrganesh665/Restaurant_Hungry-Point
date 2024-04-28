import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { data } from "../restApi.json";


const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="logo"> <span>HUNGRY</span> POINT <img src="download.png"
       alt="" /></div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {
            data[0].navbarLinks.map(element => {
              return (
                <Link to={element.link} key={element.id} spy={true} smooth={true} duration={500}>
                  {element.title}
                </Link>
              );
            })}
        </div>
    

<button className="menuBtn" onClick={() => {
  const menuSection = document.getElementById('menu');
  menuSection.scrollIntoView({ behavior: 'smooth' });
}}>
  OUR MENU
</button>

      </div>
      <div className="hamburger" onClick={()=> setShow(!show)}> </div>
    </nav>
  )
}

export default Navbar
