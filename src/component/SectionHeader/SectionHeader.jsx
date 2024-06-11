import SectionTitle from "../SectionTitle/SectionTitle";
import classes from "./SectionHeader.module.scss";

function SectionHeader({ name, white, title, description}) {
    return(
        <div className={classes.section__header}>
            <SectionTitle title={name} white={white} />
        a    <h4 className={classes["section__header--title"]}>{title}</h4>
            <p className={classes["section__header--description"]}>{description}</p>
        </div>
    )
}

export default SectionHeader;