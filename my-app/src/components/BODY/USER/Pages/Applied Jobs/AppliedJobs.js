import styles from "./AppliedJobs.module.css";
import AppliedTempCard from "./AppliedJobstemplateCard";

export default function AppliedJobs() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <AppliedTempCard
          jobTitle={"Python Developer"}
          jobDetails={"Python Machine Learning Engineer"}
          resumeDetails={"TempResume.pdf"}
          approvalStatus={"Approved"}
        />
        <div className={styles.separator} />
      </div>
      <div className={styles.container}>
        <AppliedTempCard
          jobTitle={"Python Developer"}
          jobDetails={"Python Machine Learning Engineer"}
          resumeDetails={"TempResume.pdf"}
          approvalStatus={"Approved"}
        />
        <div className={styles.separator} />
      </div>
    </div>
  );
}
