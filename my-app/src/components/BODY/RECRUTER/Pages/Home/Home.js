import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.titleInputField}>
          <input
            type="text"
            placeholder="Enter Job Title eg. Python Developer"
          />
        </div>
        <div className={styles.detailsField}>
          <textarea placeholder="Enter Job details" />
        </div>
        <div className={styles.optionMenu}>

        </div>
        <div className={styles.jobPost}>
            <button>Post Job</button>
        </div>
      </div>
    </div>
  );
}
