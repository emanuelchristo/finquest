import styles from "./styles.module.css";
import Navbar from "../components/Navbar";
import Snackbar from "../components/SnackBar";
import Link from "next/link";
export default function Refund() {
  return (
    <div id="home" className={styles["home"]}>
       <Snackbar
        message={[
          "New batch on forex trading starting soon ‼️ ",
          <Link target="_blank" href="/course/forex/" rel="noopener noreferrer" key={1}>
            <a id="offprice" >
              REGISTER NOW
            </a>
          </Link>,
          " ‼️",
        ]}
      />
      <Navbar />
      <div id="memberships" className="margin">
        <section className={styles["pricing"]}>
          <div className={styles["heading-wrapper"]}>
            <br />
            <h2>Refund & Cancellation</h2>
          </div>
          <p>
            <b>1.</b> Full payment to be made at time of purchase. <br />
            <br />
            <b>2.</b> Once purchased, no partial or full refund will be
            provided, unless there is an exceptional circumstance which will be
            decided by Finquest on a case to case basis <br />
            <br />
            <b>3.</b> Finquest does not store any of your payment information
            (debit card, credit card, net banking, etc.) or such other
            information restricted by the Reserve Bank of India (RBI) for
            processing payment and has partnered with payment gateways for the
            payment towards the services In case of any other payment, refund or
            cancellation issues, decisions will be taken on a case by case basis
            and Finquest&apos;s decision will be final and binding. <br />
            <br />
            <b>4.</b> For any concerns related to payment or refunds, kindly
            write to hellofinquest@gmail.com <br />
            <br />
          </p>
          <br />
          <br />
        </section>
      </div>
    </div>
  );
}
