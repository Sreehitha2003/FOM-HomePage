import React from "react";
import styles from './home.module.css';
import Navbar from "./Navbar";
import {BsFacebook,BsTwitter,BsInstagram, BsPinterest} from "react-icons/bs";

const Home = () => {
   return (
    <>
    <body>
        <Navbar />
        <div className={styles.image}>
        <img src="https://littlecoffeefox.com/wp-content/uploads/2018/05/Meditation-1.png" alt="">
        </img>
        <text className={styles.quotes}>An ounce of <h1>meditation</h1> is worth a pound of arbitration and a ton of litigation</text>
        <div className="text-center" class="">
        <button className={styles.yoga}>
            <img  className={styles.mask} height= "250" width= "400" src="https://spy.com/wp-content/uploads/2018/09/bluetooth-sleeping-eye-mask-headphones.jpg" alt= ""></img>
            <p className={styles.text}>Sleep Masks</p>
        </button>
        <button className={styles.yoga}>
            <img className={styles.mask} height = "250" width= "400" src="https://api.time.com/wp-content/uploads/2020/06/meditation-health.jpg?quality=85&w=1200&h=628&crop=1" alt=" "></img>
            <p className={styles.text}>Meditation Cushions</p>
        </button>
        <button className={styles.yoga}>
            <img className={styles.mask} height = "250" width= "400" src="https://media.self.com/photos/627d4440be74cc521eb01ead/4:3/w_2560%2Cc_limit/expert-approved-yoga-mat.jpeg" alt=" "></img>
            <p className={styles.text}>Meditation Mats</p>
        </button>
        </div>
        <div className="text-center">
        <button className={styles.yoga}>
            <img className={styles.mask} height = "250" width= "400" src="https://www.brettlarkin.com/wp-content/uploads/2019/01/grommet.png" alt=" "></img>
            <p className={styles.text}>Meditation Chairs</p>
        </button>
        <button className={styles.yoga}>
            <img className={styles.mask} height = "250" width= "400" src="https://assets3.cbsnewsstatic.com/hub/i/2022/03/28/f89bddae-e75e-486c-b7e4-484696364458/travel-essentials-hero.jpg" alt=" "></img>
            <p className={styles.text}>Travel Accessories</p>
        </button>
        <button className={styles.yoga}>
            <img className={styles.mask} height = "250" width= "400" src="https://www.gearhungry.com/wp-content/uploads/2020/01/best-yoga-accessories.jpg" alt=" "></img>
            <p className={styles.text}>Restorative Yoga Props</p>
        </button>
        </div>
        </div>
        <div className={styles.center}>
            <p>Follow us for more updates</p>
            <BsFacebook size ={40} color="#4267B2" className={styles.icons} href="https://www.facebook.com/friendsofmeditation"/>
            <BsTwitter size={40} color="#1DA1F2" className={styles.icons} href="#"/>
            <BsInstagram size={40} color="#3f729b" className={styles.icons} href="https://www.instagram.com/friendsofmeditation01/?hl=en"/>
            <BsPinterest size={40} color='#E60023' className={styles.icons} href="#"/>
        </div>
    </body>
    </>
   );
}

export default Home;