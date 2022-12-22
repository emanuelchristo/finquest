import React from "react";
import Image from "next/image";
import styles from './curriculum.module.css'
const Curriculum = () => {
  const data = [
    {
      imagepath: "/images/curiculum1.png",
      content:
        "Learn Investing & Trading from the top 1% of the Industry Experts.",
    },
    {
      imagepath: "/images/curiculum2.png",
      content:
        "A complete hands-on experience with live trading alongside the Community.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-5 margin">
      <Image src="/images/book.png" alt="" width="68px" height="68px" />
      <h2 className={styles.heading}>Curriculum built by the best</h2>
      <div className={styles.container}>
        {data.map((item, index) => {
          return (
            <div key={index}>
             <div >
                <div>{item.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Curriculum;
