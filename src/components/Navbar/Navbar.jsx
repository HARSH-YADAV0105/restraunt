import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import './Navbar.css';
import images from '../../constants/images';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [toogleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app-logo" />
      </div>
      <ul className="app__navbar-links">
        <li className='p__opensans' > <a href='#home'>Home</a></li>
        <li className='p__opensans' > <a href='#about'>About</a></li>
        <li className='p__opensans' > <a href='#menu'>Menu</a></li>
        <li className='p__opensans' > <a href='#award'>Awards</a></li>
        <li className='p__opensans' > <a href='#contact'>Contact Us</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className="p__opensans">Log In / Register</a>
        <div />
        <a href='/' className="p__opensans" >Book Table</a>
      </div>

      <div className="app__navbar-smallscreen ">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toogleMenu && (
          <div className="app__namvbar-smallscreeen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen-links">
              <li className='p__opensans' > <a href='#home'>Home</a></li>
              <li className='p__opensans' > <a href='#about'>About</a></li>
              <li className='p__opensans' > <a href='#menu'>Menu</a></li>
              <li className='p__opensans' > <a href='#award'>Awards</a></li>
              <li className='p__opensans' > <a href='#contact'>Contact Us</a></li>
            </ul>
          </div>
        )}
      </div>

    </nav>
  )
};

export default Navbar;
