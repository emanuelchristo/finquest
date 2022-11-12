import styles from "./reviews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const reviews = [
  {
    imageLink: "/images/jerry-james-vargheese.jpg",
    name: "Jerry Zachariah James",
    title: "Air traffic controller, Chennai airport",
    rating: 5,
    review: `The stock market always fascinated me, but time was an issue for me due to my work. That is when finQ provided me with flexible timing,where I could learn anytime I wished.`,
  },
  {
    imageLink: "/images/athul-roy.jpg",
    name: "Athul Roy",
    title: "Student & photographer",
    rating: 5,
    review: `Thanks to finQ they I was able to maintain my education and course both hand on hand, & the class were so interactive, never thought I could ever trade like this, feels great.`,
  },
  {
    imageLink: "/images/abhishek-krishna.jpg",
    name: "Abhishek Krishna",
    title: "Influencer & marketing specialist",
    rating: 5,
    review: `I had a deep concern in the stock market and how it worked, I wished to learn it and try it live, that is when finQ taught me how to adjust my funds and invest them in the stock market.`,
  },
  {
    imageLink: "/images/neena-km.jpg",
    name: "Neena KM",
    title: "Entrepreneur",
    rating: 5,
    review: `Being an entrepreneur I required a detailed course and i wanted to take my time to learn the course, finQ had no problem with all the doubts I had, all got cleared.`,
  },
  {
    imageLink: "/images/ashil-kp.jpg",
    name: "Ashil KP",
    title: "Entrepreneur & DJ",
    rating: 5,
    review: `As an artist I had 2 shows a day and required a source of income that I could do any time of the day, finQ provided me with the following solution and was an amazing experience`,
  },
  {
    imageLink: "/images/deepthi-boben.jpg",
    name: "Deepthi Boben",
    title: "Student",
    rating: 5,
    review: `As a student I wanted to earn myself, and that's when my friend introduced me to finQ, within a month I could learn the basics of trade, it was amazing, thanks finQ.`,
  },
];

export default function Reviews() {
  return (
    <div className="margin">
      <section className={styles["reviews"]}>
        <div className={styles.heading}>
          <h2>Reviews</h2>
          <img src="/images/reviews-star.svg" height="auto" alt="" />
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          breakpoints={{
            640: {
              // width: 640,
              slidesPerView: 1,
            },
            768: {
              // width: 768,
              slidesPerView: 2,
            },
            1200: {
              // width: 1000,
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
            type: "bullets",
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <Review
                key={index}
                imageLink={item.imageLink}
                name={item.name}
                title={item.title}
                rating={item.rating}
                review={item.review}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

function Review({ imageLink, name, title, rating, review }) {
  return (
    <div className={styles["review"]}>
      <div className="flex items-center">
        <div
          className={styles["avatar"]}
          style={{ backgroundImage: `url(${imageLink})` }}
        ></div>
        <div className={styles["name-title-wrapper"]}>
          <h3>{name}</h3>
          <span>{title}</span>
        </div>
      </div>
      <div className={styles["stars-wrapper"]}>
        {[...Array(rating)].map((item, index) => (
          <Star key={index} />
        ))}
      </div>
      <p className={styles["review-text"]}>{review}</p>
    </div>
  );
}

function Star() {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 0L14.0841 6.75509L21.4616 7.60081L15.9902 12.6214L17.4656 19.8992L11 16.247L4.53436 19.8992L6.00981 12.6214L0.538379 7.60081L7.91589 6.75509L11 0Z"
        fill="#FBC029"
      />
    </svg>
  );
}
