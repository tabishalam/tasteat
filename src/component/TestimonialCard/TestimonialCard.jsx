import classes from "./TestimonialCard.module.scss";

function TestimonialCard({ image, name, location, message }) {
    return (
        <div className={classes.testimonial__card}>
            <div className={classes["testimonial__card--profile"]}>
                <div className={classes["testimonial__card--profile--image"]}>
                    <img src={image} alt="Testimonial profile" />
                </div>
                <div className={classes["testimonial__card--profile--info"]}>
                    <h5 className={classes["testimonial__card--profile--name"]}>{name}</h5>
                    <p className={classes["testimonial__card--profile--location"]}>{location}</p>
                </div>
            </div>
            <p className={classes["testimonial__card--message"]}>"{message}</p>
        </div>
    )   
}


export default TestimonialCard;
