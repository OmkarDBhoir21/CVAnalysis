import styles from "./HistoryCard.module.css";

export default function HistoryCard({
  resumeDetails,
  resumeScore,
  Date,
  Time,
}) {
  return (
    <div className={styles.main}>
      <div className={styles.cardContainer}>
        <div className={styles.items}>
          <p>Resume: &emsp;  {resumeDetails}</p>
          <p>Resume Score: &emsp; {resumeScore}</p>
        </div>
      </div>
      <div className={styles.dateTimeContainer}>
        <p>Date: {Date}</p>
        <p>Time: {Time}</p>
      </div>
    </div>
  );
}
