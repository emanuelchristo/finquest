import styles from "./enrollmentdate.module.css";

export default function EnrollmentDate() {
  return (
    <div className="margin" id="enrollmentdate">
      <section className={styles["enrollmentdate"]}>
        <div>
          <h2>ENROLLMENT DEADLINE</h2>
          <p>17th Dec 2022</p>
        </div>
        <div>
          <h2>Cohort Starts on</h2>
          <p>18th Dec 2022</p>
        </div>
      </section>
    </div>
  );
}