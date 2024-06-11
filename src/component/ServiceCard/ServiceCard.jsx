import classes from "./ServiceCard.module.scss";

function ServiceCard({ icon, title }) {
    return (
        <div className={classes.service__card}>
            <img className={classes["service__card--image"]} src={icon} alt="Service Icon"  />
            <h5 className={classes["service__card--title"]}>{title}</h5>
        </div>
    )
}

export default ServiceCard;
