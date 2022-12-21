import styles from "./upcomingbatches.module.css";
const UpcomingBatches = () => {
  const data = [
    {
      type: "online",
      week: "weekend",
      days: "Mon, Tue & Fri",
      date: "December 24",
      from: "7:00 PM",
      to: "9:00 PM",
      status: "available",
    },
    {
      type: "offline",
      week: "Weekend",
      days: "SAT & SUN",
      date: "December 23",
      from: "7:00 PM",
      to: "9:00 PM",
      status: "Soldout",
    },
  ];

  return (
    <>
      <div className="margin">
        <div className={styles.heading}>
          <h1>Upcoming Batches</h1>
          <p>
            We conduct offline and online classes, and updates for it are
            regularly posted. Keep an eye on this section.
          </p>
        </div>
        <div className={styles.container}>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <span style={{background:item.type=='online'?'#1BA93F':'#C141CC'}}>{item.type}</span>
                <div className={styles.week}>
                  <h2>{item.week}</h2>
                  <h4>{item.days}</h4>
                </div>
                <div className={styles.time}>
                  <h2>
                    <img src="/images/course/icons/calender.svg" alt="" />{" "}
                    {item.date}
                  </h2>
                  <h2>
                    <img src="/images/course/icons/clock.svg" alt="" /> {item.from} - {item.to}
                    
                  </h2>
                </div>
                <button style={{opacity:item.status=='available'?'':'.5'}} disabled={item.status=='available'?0:1}>Request callback</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default UpcomingBatches;
