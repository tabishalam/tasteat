import classes from "./GoldBtn.module.scss";

function GoldBtn({ text }) {
    return <button className={classes.goldenBtn}>{text}</button>
}

export default GoldBtn;
