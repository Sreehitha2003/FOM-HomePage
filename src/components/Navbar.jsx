import React from 'react';
import {BsSearch, BsCart3,BsHeart} from "react-icons/bs";
import styles from './Navbar.module.css';

const Navbar = () => {
     return(
        <>
         <body>
        <nav class="navbar navbar-expand-lg navbar-dark" className={styles.navbar}>
          <a class="navbar-brand"></a>
             <h2 id="bgwhite" className={styles.fom}> Friends of Meditation</h2>
             <BsSearch size={30} className={styles.icon}/>
             <BsCart3 size={30} className={styles.icon}/>
             <BsHeart size={30} className={styles.icon}/>
        </nav>
          </body>
        </>
     );
}

export default Navbar;