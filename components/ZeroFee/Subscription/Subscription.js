import styles from './subscription.module.css'
import Link from 'next/link';
import {motion} from 'framer-motion'
const Subscription = () => {
  return (
    <div className="margin">
      <div className={styles.subscription}>
        <h2 className="text-center">Starter Subscription</h2>
        <div className={styles.container}>
        <div>
          <div className={styles.off}>
          {/* <img src="/images/zero-fee-challenge/offer-tag.svg" alt="" /> */}
            44% OFF
          </div>
            <h4>1 month</h4>
            <div>
            <h2 className="text-center">₹4,350</h2>
            <p>Total (Incl. of all taxes)</p>
            </div>
            <Link href="/course/starter/#subscriptionoptions" passHref>
          <motion.button
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { type: "spring", mass: 1.15, delay: 1.65 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
           
          >
            <span>Book today</span>
          </motion.button>
        </Link>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Subscription;
