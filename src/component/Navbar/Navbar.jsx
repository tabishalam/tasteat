import InstagramIcon from "../../assets/icon--instagram.svg";
import FacebookIcon from "../../assets/icon--facebook.svg";
import TwitterIcon from "../../assets/icon--twitter.svg";
import PinterestIcon from "../../assets/icon--pinterest.svg";

import classes from "./Navbar.module.scss";

function Navbar() {
    return (
        <nav className={classes.nav}>
            <ul className={classes.nav__links}>
                <li className={classes.nav__link}>
                    <a href="/">Home</a>
                </li>
                <li className={classes.nav__link}>
                    <a href="/about">About</a>
                </li>
                <li className={classes.nav__link}>
                    <a href="/menu">Menu</a>
                </li>
                <li className={classes.nav__link}>
                    <a href="/reservation">Reservation</a>
                </li>
                <li className={classes.nav__link}>
                    <a href="/gallery">Gallery</a>
                </li>
                <li className={classes.nav__link}>
                    <a href="/blog">Blog</a>
                </li>
                <li className={classes.nav__link}>
                    <a href="/contact">Contact</a>
                </li>
            </ul>

            <ul className={classes.nav__social}>
                <li className={classes["nav__social--link"]}>
                    <img src={InstagramIcon} alt="Instagram Icon" /> 
                </li>
                <li className={classes["nav__social--link"]}>
                    <img src={FacebookIcon} alt="Facebook Icon" /> 
                </li>
                <li className={classes["nav__social--link"]}>
                    <img src={TwitterIcon} alt="Twitter Icon" /> 
                </li>
                <li className={classes["nav__social--link"]}>
                    <img src={PinterestIcon} alt="Pinterest Icon" /> 
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;