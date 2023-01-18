import { BsShieldCheck,BsShare,BsAward } from "react-icons/bs";
import styles from "./whatdoiget.module.css";
import {motion} from 'framer-motion'

const points = [
  {
    icon: <BsShieldCheck />,
    title: "Official and Verified",
    desc: "Receive an Mentor signed certificate with the Finquest’s logo to verify your achievements and increase your reputation in Stock Market Analysis.",
  },
  {
    icon: <BsShare />,
    title: "Shareable & Valid",
    desc: "Add the certificate to your CV or your resume or post it directly on LinkedIn. You can even post it on Instagram Digital Collectible, LinkedIn & Twitter",
  },
  {
    icon: <BsAward />,
    title: "Enhances Credibility",
    desc: "NFT based Certificate deployed on Polygon Blockchain. Use your certificate to enhance your professional credibility and stand out among your peers!",
  },
];

const WhatDoIGet = () => {
  return (
    <div className="margin">
      <div className={styles.whatdoiget}>
        <h2 className="text-center">What Do I Get</h2>
        <div className={styles.container}>
          <div>
            <motion.div className={styles.certificate} initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { type: "spring", mass: 1.15, delay: 1.65 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
              <img src="/images/zero-fee-challenge/certificate.png" alt="" />
            </motion.div>
          </div>
          <div className={styles.points}>
            {points.map((Item, index) => (
              <div key={index}>
                <h4>
                  {Item.icon}
                  {Item.title}
                </h4>
                <p>{Item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhatDoIGet;
