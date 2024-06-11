import BlogPost from "../../component/BlogPost/BlogPost";
import MenuItem from "../../component/MenuItem/MenuItem";
import IconCard from "../../component/IconCard/IconCard";
import GoldBtn from "../../component/Button/GoldBtn/GoldBtn";
import ServiceCard from "../../component/ServiceCard/ServiceCard";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import PopularDishCard from "../../component/PopularDishCard/PopularDishCard";
import TestimonialCard from "../../component/TestimonialCard/TestimonialCard";
import SecondaryButton from "../../component/Button/SecondaryBtn/SecondaryBtn";


import IconMenu from "../../assets/icon--menu.svg";
import TimeIcon from "../../assets/icon--time.svg";
import NotesIcon from "../../assets/icon--notes.svg";
import IconScooter from "../../assets/icon--scooter.svg";
import IconTwitter from "../../assets/icon--twitter.svg";
import IconCalender from "../../assets/icon--calender.svg";
import IconFacebook from "../../assets/icon--facebook.svg";
import IconPinterest from "../../assets/icon--pinterest.svg";
import IconInstagram from "../../assets/icon--instagram.svg";


import Logo from "../../assets/Logo.svg";
import Pizza from "../../assets/pizza.png";
import Burger from "../../assets/burger.png";
import StoryImage from "../../assets/story__image.jpg";
import PizzaPrice from "../../assets/pizza__price.svg";
import BlogPost1 from "../../assets/blog__post--1.png";
import BlogPost2 from "../../assets/blog__post--2.png";
import BurgerPrice from "../../assets/burger__price.svg";
import LocationIcon from "../../assets/icon--location.svg";
import SpecialMenuItem from "../../assets/special__menu.png";
import PopularDish1 from "../../assets/popular__dish--1.png";
import PopularDish2 from "../../assets/popular__dish--2.png";
import PopularDish3 from "../../assets/popular__dish--3.png";
import PopularDish4 from "../../assets/popular__dish--4.png";
import AboutSignature from "../../assets/about--signature.svg";
import HeaderImage from "../../assets/home__header--image1.png";
import TestimonialImage from "../../assets/testimonial__image.png";
import TestimonialImage1 from "../../assets/testimonial__image--1.png"
import HeaderBackground from "../../assets/home__header--background.svg";


import MenuItem1 from "../../assets/menu--item1.jpg";
import MenuItem2 from "../../assets/menu--item2.jpg";
import MenuItem3 from "../../assets/menu--item3.jpg";
import MenuItem4 from "../../assets/menu--item4.jpg";
import MenuItem5 from "../../assets/menu--item5.jpg";
import MenuItem6 from "../../assets/menu--item6.jpg";
import MenuItem7 from "../../assets/menu--item7.jpg";
import MenuItem8 from "../../assets/menu--item8.jpg";
import MenuItem9 from "../../assets/menu--item9.jpg";
import MenuItem10 from "../../assets/menu--item10.jpg";


import classes from "./Home.module.scss";



function Home() {
    return(
        <>
            <header className={classes.header}>
                <div className={classes.header__text}>
                    <h2 className={classes["header__text--heading"]}>Welcome to Restaurantate</h2>
                    <p className={classes["header__text--subheading"]}>Simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                    <SecondaryButton text="View Menu" />
                </div>
                <div className={classes.header__image}>
                    <img className={classes.header__background} src={HeaderBackground} alt="Background image" />
                    <img className={classes["header__image--image1"]} src={HeaderImage} alt="Header image 1" />
                </div>
            </header>

            <section className={classes.about}>
                <div className={classes.about__contact}>
                    <IconCard icon={LocationIcon} title="Locate Us" description="Riverside 25, San Francisco, California" />
                    <IconCard icon={TimeIcon} title="Open Hours" description="Mon To Fri 9:00 AM - 9:00 PM" />
                    <IconCard icon={NotesIcon} title="Reservation" description="hirestaurantate@gmail.com" />
                </div>

                <div className={classes.about__story}>
                    <img className={classes["about__story--image"]} src={StoryImage} alt="" />
                    
                    <div className={classes["about__story__text"]}>
                        <div className={classes["about__story__text--top"]}>
                            <div className={classes["story__text--card"]}>
                                <h3 className={classes["story__text--card--title"]}>The story</h3>
                                <p className={classes["story__text--card--description"]}>Lorem Ipsum is 
                                    that it has a more-or-less normal distribution of letters, as opposed 
                                    to using 'Content here, content gfshere', makinlook like readable English. 
                                    Many desktop publishing packages.</p>
                            </div>                            
                        </div>
                        <div className={classes["about__story__text--middle"]}>
                            <div className={classes["story__text--card"]}>
                                <h3 className={classes["story__text--card--title"]}>1996</h3>
                                <p className={classes["story__text--card--description"]}>Lorem Ipsum is that it 
                                    has a more-or-less normal distribution </p>
                            </div>

                            <div className={classes["story__text--card"]}>
                                <h3 className={classes["story__text--card--title"]}>2021</h3>
                                <p className={classes["story__text--card--description"]}>Lorem Ipsum is that it 
                                    has a more-or-less normal Content content</p>
                            </div>
                        </div>
                        <div className={classes["about__story__text--bottom"]}>
                            <p className={classes["story__text--card--description"]}>JOSEFINE</p>
                            <img className={classes["story__text--card--signature"]} src={AboutSignature} alt="Signatures" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={classes.menu}>
                <SectionTitle title="Menu" white={false} />

                <div className={classes.menu__container}>
                    <div className={classes.menu__special}>
                        <div className={classes["menu__special--text"]}>
                            <h4 className={classes["menu__special--title"]}>Try Our Special Offers</h4>
                            <p className={classes["menu__special--description"]}>Lorem Ipsum is that it 
                                has a more-or-less normal distribution of letters, as opposed to using 
                                'Content here, content making it look like readable English.</p>
                        </div>
                        
                        <img className={classes["menu__special--image"]} src={SpecialMenuItem} alt="Special menu item image" />
                        <GoldBtn text="See all dishes" />
                    </div>

                    <div className={classes.menu__items}>
                        <h4 className={classes["menu__items--title"]}>Starters</h4>

                        <MenuItem image={MenuItem1} 
                            title="Raw Scallops from Erquy" 
                            description="Candied Jerusalem artichokes, truffle"
                            price="40" />

                        <MenuItem image={MenuItem2} 
                            title="Spring Roll" 
                            description="Candied Jerusalem artichokes, truffle"
                            price="20" />

                        <MenuItem image={MenuItem3} 
                            title="French Onion Soups" 
                            description="Candied Jerusalem artichokes, truffle"
                            price="25" />

                        <MenuItem image={MenuItem4} 
                            title="Tomato Bruschetta" 
                            description="Candied Jerusalem artichokes, truffle"
                            price="30" />


                        <h4 className={classes["menu__items--title"]}>Main Dish</h4>

                        <MenuItem image={MenuItem5} 
                            title="Grilled Salmon with Dil Sauce" 
                            description="Candied Jerusalem artichokes, truffle"
                            price="40" />

                        <MenuItem image={MenuItem6} 
                            title="Roast Beef with Vegetable" 
                            description="Candied Jerusalem artichokes, truffle"
                            price="20" />


                        <MenuItem image={MenuItem7} 
                            title="Marrkesh Vegetetarian Curruy" 
                            description="Candied Jerusalem artichokes, truffle"
                            price="25" />

                        <MenuItem image={MenuItem8} 
                            title="Spicy Vegan Potato Curry" 
                            description="Candied Jerusalem artichokes, truffle"
                            price="30" />

                        <h4 className={classes["menu__items--title"]}>Dessert</h4>

                        <MenuItem image={MenuItem9} 
                            title="Apple Pie with Cream" 
                            description="Candied Jerusalem artichokes, truffle"
                            price="40" />

                        <MenuItem image={MenuItem10} 
                            title="Lemon Meringue Pie" 
                            description="Candied Jerusalem artichokes, truffle"
                            price="20" />
                    </div>
                </div>
            </section>

            <section className={classes.testimonial}>
                <div className={classes.testimonial__text}>
                    <div className={classes.testimonial__header}>
                        <SectionTitle title="Testimonial" white={true} />
                        <h4 className={classes["testimonial__header--title"]}>What our clients say</h4>
                        <p className={classes["testimonial__header--description"]}>We love to hear from 
                            customers, so please leave a comment or say hello in an email.</p>
                    </div>

                    <div className={classes.testimonial__cards}>
                        <TestimonialCard 
                            image={TestimonialImage1} 
                            name="Daniyal Sppra" 
                            location="Newyork"
                            message="It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly."
                            />

                        <TestimonialCard 
                            image={TestimonialImage1} 
                            name="Daniyal Sppra" 
                            location="Newyork"
                            message="It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly."
                            />

                        <TestimonialCard 
                            image={TestimonialImage1} 
                            name="Daniyal Sppra" 
                            location="Newyork"
                            message="It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly."
                            />
                    </div>

                    <div className={classes.testimonial__navigation}>
                        <div className={`${classes["testimonial__navigation--btn"]} ${classes.active}`}></div>
                        <div className={`${classes["testimonial__navigation--btn"]}`}></div>
                    </div>
                </div>

                <img className={classes.testimonial__image} src={TestimonialImage} alt="Testimonial Image" />
            </section>

            <section className={classes.special}>
                <div className={classes.special__header}>
                    <SectionTitle title="Offer" white={false} />
                    <h4 className={classes["special__header--title"]}>Our special  Offer dishes</h4>
                    <p className={classes["special__header--description"]}>Lorem Ipsum is that it 
                        has a more-or-less normal distribution of letters, as opposed to using 
                        'Content here, content making.</p>
                </div>

                <div className={classes.special__cards}>
                    <div className={`${classes["special__card"]} ${classes["special__burgerCard"]}`}>
                        <div className={classes["special__burgerCard--info"]}>
                            <img className={classes["special__burgerCard--offerPrice"]} src={BurgerPrice} alt="Burger Price" />
                            <p className={classes["special__burgerCard--discount"]}>50% Offer Going</p>
                            <h4 className={classes["special__burgerCard--title"]}>Chicken Burger</h4>
                            <p className={classes["special__burgerCard--description"]}>Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>

                        <img className={classes["special__burgerCard--burger"]} src={Burger} alt="Burger Image" />
                    </div>

                    <div className={`${classes["special__card"]} ${classes["special__pizzaCard"]}`}>
                        <div className={classes["special__pizzaCard--info"]}>
                            <img className={classes["special__pizzaCard--offerPrice"]} src={PizzaPrice} alt="Pizza Price" />
                            <p className={classes["special__pizzaCard--discount"]}>50% Offer Going</p>
                            <h4 className={classes["special__pizzaCard--title"]}>Chicken Pizza</h4>
                            <p className={classes["special__pizzaCard--description"]}>Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>

                        <img className={classes["special__pizzaCard--pizza"]} src={Pizza} alt="Pizza Image" />
                    </div>
                </div>
            </section>

            <section className={classes.popular}>
                <div className={classes.popular__header}>
                    <SectionTitle title="Offer" white={false} />
                    <h4 className={classes["popular__header--title"]}>Popular Dishes</h4>
                    <p className={classes["popular__header--description"]}>Lorem Ipsum is that it 
                        has a more-or-less normal distribution of letters, as opposed to using 
                        'Content here, content making.</p>
                </div>

                <div className={classes.popular__dishes}>
                    <PopularDishCard
                        image={PopularDish1}
                        title="Chicken Manjoori"
                        price={15}
                        description="Lorem Ipsum is that it has a more-or-less normal"
                        />

                    <PopularDishCard
                        image={PopularDish2}
                        title="Chicken Manjoori"
                        price={15}
                        description="Lorem Ipsum is that it has a more-or-less normal"
                        />
                    
                    <PopularDishCard
                        image={PopularDish3}
                        title="Chicken Manjoori"
                        price={15}
                        description="Lorem Ipsum is that it has a more-or-less normal"
                        />

                    <PopularDishCard
                        image={PopularDish4}
                        title="Chicken Manjoori"
                        price={15}
                        description="Lorem Ipsum is that it has a more-or-less normal"
                        />
                </div>

                <GoldBtn text="See all dishes" />
            </section>

            <section className={classes.service}>
                <div className={classes.service__header}>
                    <SectionTitle title="What we offer" white={true} />
                    <h4 className={classes["service__header--title"]}>Our Great Services</h4>
                    <p className={classes["service__header--description"]}>Lorem Ipsum is that 
                        it has a more-or-less normal distribution content making it look 
                        like readable English. </p>
                </div>

                <div className={classes.service__cards}>
                    <ServiceCard icon={IconCalender} title="Open 24/7" />
                    <ServiceCard icon={IconMenu} title="Special Menus" />
                    <ServiceCard icon={IconScooter} title="Home Delivery" />
                </div>
            </section>

            <section className={classes.blog}>
                <div className={classes["blog__header"]}>
                    <SectionTitle title="BLOG" />
                    <h4 className={classes["blog__header--title"]}>Be First Who Read News</h4>
                    <p className={classes["blog__header--description"]}>Lorem Ipsum is that 
                        it has a more-or-less normal distribution of letters, as opposed to using 
                        'Content here, content making.</p>
                </div>

                <div className={classes.blog__posts}>
                    <BlogPost 
                        image={BlogPost1} 
                        tag1="Restaurants" 
                        tag2="Feb 22, 2022" 
                        title="The Most Popular Delicious Food Of Mediterranean Cuisine" 
                        description="Capitalize on low-hanging fruit to identify a 
                                ballpark value added matrix economically and the creative 
                                activity to beta test override the food quality."
                        />

                    <BlogPost 
                        image={BlogPost2} 
                        tag1="Restaurants" 
                        tag2="Feb 22, 2022" 
                        title="Elegant Dessert: 10 Tips How to Make It at Home" 
                        description="Capitalize on low-hanging fruit to identify 
                            a ballpark value added matrix economically and the creative 
                            activity to beta test override the food quality."
                        />
                </div>
            </section>

            <section className={classes.reservation}>
                <div className={classes.reservation__form}>
                    <div className={classes["reservation__form--header"]}>
                        <SectionTitle title="Reservation" white={true} />
                        <h4 className={classes["reservation__form--title"]}>Book your table now</h4>
                    </div>

                    <div className={classes["reservation__form--inputHolder"]}>
                        <input placeholder="Name" type="text" />
                        <input placeholder="Email" type="email" />
                    </div>

                    <div className={classes["reservation__form--inputHolder"]}>
                        <input placeholder="Person" type="text" />
                        <input placeholder="Timing" type="text" />
                        <input placeholder="Date" type="text" />
                    </div>

                    <button className={classes["reservation__form--btn"]}>Book a Table</button>
                </div>
            </section>

            <footer className={classes.footer}>
                <div className={classes.footer__top}>
                    <h4 className={classes["footer__top--instagramFeed"]}>Instagram Feed</h4>

                    <img className={classes["footer__top--logo"]} src={Logo} alt="Logo" />

                    <div className={classes["footer__top--social"]}>
                        <img src={IconFacebook} alt="Facebook Icon" />
                        <img src={IconInstagram} alt="Instagram Icon" />
                        <img src={IconTwitter} alt="Twitter icon" />
                        <img src={IconPinterest} alt="Pinterest Icon" />
                    </div>
                </div>

                <div className={classes.footer__middle}>
                    <div className={classes["footer__middle--contact"]}>
                        <SectionTitle title="Contact" />
                        <div className={classes["footer__middle--contact--details"]}>
                            <p>5 Rue Dalou, 75015 Paris</p>
                            <p><span className={classes.primaryText}>Call </span> - +33 156 78 89 56</p>
                            <p className={classes.primaryText}>benoit@mail.com</p>
                        </div>
                    </div>

                    <div className={classes["footer__middle--newsletter"]}>
                        <p className={classes["footer__middle--newsletter--heading"]}>Join our mailing list for updates,
                        Get news & offers events.</p>
                        <div className={classes["footer__middle--newsletter--input"]}>
                            <input placeholder="Email" type="email" />
                            <button className={classes["footer__middle--newsletter--btn"]}>Subscribe</button>
                        </div>
                    </div>

                    <div className={classes["footer__middle--workingHour"]}>
                        <SectionTitle title="Working Hour" white={true} />
                        <div className={classes["footer__middle--workingHour--time"]}>
                            <p><span className={classes.primaryText}>Mon - Fri</span>: 7.00am - 6.00pm</p>
                            <p><span className={classes.primaryText}>Sat</span>: 7.00am - 6.00pm</p>
                            <p><span className={classes.primaryText}>Sun</span>: 8.00am - 6.00pm</p>
                        </div>
                    </div>
                </div>
            </footer>

            <div className={classes.credit}>
                    <p>&copy; Copyright - Restaurantate | Designed by <span className={classes.primaryText}>VictorFlow</span> Templates - Powered by <span className={classes.primaryText}>Webflow</span></p>
                    <p>Styleguide / Licenses</p>
            </div>
        </>
    )
}

export default Home;