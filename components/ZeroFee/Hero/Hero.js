import styles from "./hero.module.css";
const Hero = () => {
  return (
    <div className="margin">
      <section className={styles.section1}>
        <div className={styles["heading"]}>
          <h2>
            The Student Triumph Book
            <img
              className={styles["decoration"]}
              src="/images/about-us-decoration.svg"
              width="60px"
              height="auto"
              alt=""
            />
          </h2>
        </div>
        <p>
          The most challenging part in the Zero Fees Challenge is how consistent
          you watch the the market. It has nothing to do with time but
          everything to do with discipline. See how our students are responding
          to the challenge. How they completed the DREAM!
        </p>
      </section>
      <section className={styles.section2}>
        <div>
          <img src="/icons/benefit-goal.png" height="auto" />
          <h2>What is the Zero Fee Challenge?</h2>
        </div>
        <p>
        As the name suggests, with Zero Fees Challenge, you could possibly learn the Stock Market
Mentorship program for Zero cost. Not to get confused, the programme has a fees. (Arguably
the most affordable Stock market mentorship program in Kerala with the best course syllabus
and expert mentors).
        </p>
        <p>
        Through this challenge, Finquest will help you regain the Fee amount you&apos;ve invested in
learning, from the Stock Market itself. It&apos;s cent percent guaranteed, for we have the best
Community which will actively helps you understand the Market inside out. There will also be
Live Trading sessions from experts so you&apos;ll right away know which stock to watch out.
        </p>
        <p>
        Let&apos;s accept the challenge, shall we?
        </p>
      </section>
    </div>
  );
};
export default Hero;
