import classes from "./MenuItem.module.scss";

function MenuItem({ image, title, description, price}) {
    return (
        <div className={classes.menu__item}>
            <img className={classes["menu__item--image"]} src={image} alt="Menu Item image" />

            <div className={classes["menu__item--info"]}>
                <h5 className={classes["menu__item--title"]}>{title}</h5>
                <p className={classes["menu__item--description"]}>{description}</p>
            </div>

            <div className={classes["menu__item--line"]}>
                <div className={classes["menu__item--line--circle"]}></div>
                <div className={classes["menu__item--line--dashed"]}></div>
                <div className={classes["menu__item--line--circle"]}></div>
            </div>

            <h5 className={classes["menu__item--price"]}>${price}</h5>
        </div>
    )
}

export default MenuItem;