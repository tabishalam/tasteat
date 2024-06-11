import classes from "./PopularDishCard.module.scss";
function PopularDishCard({ image, title, price, description }) {
  return (
    <div className={classes.popular__dish}>
        <img className={classes["popular__dish--image"]} src={image} alt="Dish Image" />

        <div className={classes["popular__dish--header"]}>
            <h4 className={classes["popular__dish--title"]}>{title}</h4>
            <p className={classes["popular__dish--price"]}>${price}</p>
        </div>

        <p className={classes["popular__dish--description"]}>{description}</p>
    </div>
  )
}

export default PopularDishCard;