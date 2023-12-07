import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Link from 'next/link';
import { HeaderData } from './HeaderData';
import style from './navbar.module.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link href='/aaaa' className={style.menu_bars}>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav_menu active' : 'nav_menu'}>
          <ul className={style.nav_menu_items} onClick={showSidebar}>
            <li className={style.navbar_toggle}>
              <Link href='/a' className={style.menu_bars}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {HeaderData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link href={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;