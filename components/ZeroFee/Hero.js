import styles from "./hero.module.css";
const Hero = () => {
  return (
    <>
      <section className={styles.section1}>
        <div className={styles["heading"]}>
          <div className={styles["heading-wrapper"]}>
            <img
              className={styles["decoration"]}
              src="/images/about-us-decoration.svg"
              width="60px"
              height="auto"
              alt=""
            />
            <h2>The People Success Book</h2>
          </div>
        </div>
        <p>
          Over the last six months, we&apos;ve been speaking to India&apos;s top
          people ops leaders on talent acquisition, employee morale and
          workplace well-being in the current context. We&apos;ve distilled all
          their insights into an ebook that you can consume over tea.
        </p>
      </section>
      <section className={styles.section2}>
        <div>
          <img src="/icons/benefit-goal.png" height="auto" />
          <h2> What is the Zero Fee Challenge?</h2>
        </div>
        <p>
          As the name suggests, with Zero Fees Challenge, you could possibly
          learn the 40 days Stock Market program for technically Zero cost. Not
          to get confused, the programme has a small amount of fees. (Arguably
          the most affordable Stock market mentorship program in Kerala with the
          best course syllabus and expert mentors).
        </p>
        <p>
          Through this challenge, Finquest will help you regain the money (fees)
          you&apos;ve invested in learning; from the Stock Market itself. It&apos;s cent
          percent guaranteed for we have the best Community which will actively
          suggest you Stocks to watch.
        </p>
        <p>
          There will also be Live Trading sessions from experts so you&apos;ll right
          away know which stock to watch out.
        </p>
      </section>
    </>
  );
};
export default Hero;
