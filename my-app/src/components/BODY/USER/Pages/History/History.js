import styles from "./History.module.css";
import HistoryCard from "./HistoryCard";

export default function History() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <HistoryCard
          resumeDetails={"TempResume.pdf"}
          resumeScore={'80%'}
          Date={'24/03/2023'}
          Time={'21.59'}
        />
        <div className={styles.separator} />
      </div>
      <div className={styles.container}>
        <HistoryCard
          resumeDetails={"TempResume.pdf"}
          resumeScore={'80%'}
          Date={'24/03/2023'}
          Time={'21.59'}
        />
        <div className={styles.separator} />
      </div>
    </div>
  );
}
