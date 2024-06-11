import classes from "./SectionTitle.module.scss";

function SectionTitle({ title, white }) {
    return (
        <div className={`${classes.section__title} ${ white? classes.white: null }`}>
            <p className={classes["section__title--title"]}>{title}</p>
        </div>
    )
}

export default SectionTitle;