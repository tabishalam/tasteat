import classes from "./IconCard.module.scss";

function IconCard({ icon, title, description}) {
    return (
        <div className={classes.icon__card}>
            <img className={classes["icon__card--icon"]} src={icon} alt="Icon"/>
            <div className={classes["icon__card--info"]}>
                <p className={classes["icon__card--title"]}>{title}</p>
                <p className={classes["icon__card--description"]}>{description}</p>
            </div>
        </div>
    )
}

export default IconCard;