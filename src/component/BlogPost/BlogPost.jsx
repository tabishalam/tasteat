import GoldBtn from "../Button/GoldBtn/GoldBtn";
import SectionTitle from "../SectionTitle/SectionTitle";
import classes from "./BlogPost.module.scss";


function BlogPost({ image, tag1, tag2, title, description}) {
    return (
        <div className={classes.post}>
            <div className={classes["post__imageContainer"]}>
                <div className={classes.post__backdrop}>
                    <GoldBtn text="View More" />
                </div>
                <img className={classes["post--image"]} src={image} alt="Blog Post image" />
            </div>
            
            <div className={classes["post--info"]}>
                <div className={classes["post--tag"]}>
                    <SectionTitle title={tag1} white={false} />
                    <SectionTitle title={tag2} white={false} />
                </div>

                <h4 className={classes["post--title"]}>{title}</h4>
                <p className={classes["post--description"]}>{description}</p>
            </div>
        </div>
    )
}

export default BlogPost;