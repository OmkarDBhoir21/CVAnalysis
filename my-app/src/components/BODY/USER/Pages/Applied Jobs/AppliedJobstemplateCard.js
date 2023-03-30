import styles from "./AppliedJobsTemplateCard.module.css";

export default function AppliedTempCard(
  {jobTitle,
  jobDetails,
  resumeDetails,
  approvalStatus,}
) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.items}>
        <p>Job Title:  {jobTitle}</p>
        <p>Job Details:  {jobDetails}</p>
        <p>Resume:  {resumeDetails}</p>
      </div>
        <p>Status:  {approvalStatus}</p>
    </div>
  );
}
