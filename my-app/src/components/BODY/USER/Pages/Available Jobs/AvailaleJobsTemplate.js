import styles from "./AvailableJobsTemp.module.css";

export default function AvailableTempCard({
  Company,
  reqRole,
  experience,
  details,
  lastDate,
}) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.items}>
        <p>Company: <p>{Company}</p></p>
        <p>Job Role: <p>{reqRole}</p></p>
        <p>Experience: <p>{experience} Years.</p></p>
        <p className={styles.descriptionText}>Job Description:  <p>{details}</p></p>
      </div>
      <p>Due Date: {lastDate}</p>
    </div>
  );
}
