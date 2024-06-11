import classes from "./SecondaryBtn.module.scss";

function SecondaryBtn({ text }) {
    return <button className={classes.secondary}>{text}</button>
}

export default SecondaryBtn;