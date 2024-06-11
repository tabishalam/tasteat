import Logo from "../../assets/Logo.svg";
import CartIcon from "../../assets/icon--cart.svg";
import PrimaryBtn from "../../component/Button/PrimaryBtn/PrimaryBtn";
import SecondaryBtn from "../../component/Button/SecondaryBtn/SecondaryBtn";

import classes from "./TopBar.module.scss";

function Topbar() {
    return(
        <div className={classes.topbar}>
            <SecondaryBtn text="Call - 987 654 321" />            
            <img className={classes.topbar__logo} src={Logo} alt="Company Logo" />

            <div className={classes["container--right"]}>
                <img className={classes["topbar__cart-icon"]} src={CartIcon} alt="Cart Icon" /> 
                <PrimaryBtn text="Reservation" />
            </div>
        </div>
    )
}

export default Topbar;