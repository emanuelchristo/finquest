import styles from "./enrollmentdate.module.css";

export default function EnrollmentDate() {
  return (
    <div className="margin" id="enrollmentdate">
      <section className={styles["enrollmentdate"]}>
        <div>
          <h2>ENROLLMENT DATE</h2>
          <p>11th Nov 2022</p>
        </div>
        <div>
          <h2>Start date</h2>
          <p>12th Nov 2022</p>
        </div>
      </section>
    </div>
  );
}
