import classes from "./PrimaryBtn.module.scss";

function PrimaryBtn({ text }) {
    return <button className={classes.primary}>{text}</button>
}

export default PrimaryBtn;