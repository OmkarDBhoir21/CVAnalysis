import styles from "./AvailableJobs.module.css";
import { search } from "../../../../../utils/Icons";
import SearchBar from "./SearchBar";
import AvailableTempCard from "./AvailaleJobsTemplate";

export default function AvilableJobs() {
  return (
    <div className={styles.main}>
      <SearchBar />
      <div className={styles.container}>
        <AvailableTempCard
          Company={"XYZ Solutions PVT LTD."}
          reqRole={"Python Developer"}
          experience={"0-1"}
          details={
            "We are loopking for a Python Developer having good knowledge of programming in python for application development."
          }
          lastDate={"10/04/2023"}
        />
      <div className={styles.separator} />
      </div>
      <div className={styles.container}>
        <AvailableTempCard
          Company={"XYZ Solutions PVT LTD."}
          reqRole={"Python Developer"}
          experience={"0-1"}
          details={
            "We are loopking for a Python Developer having good knowledge of programming in python for application development."
          }
          lastDate={"10/04/2023"}
        />
      <div className={styles.separator} />
      </div>
    </div>
  );
}
