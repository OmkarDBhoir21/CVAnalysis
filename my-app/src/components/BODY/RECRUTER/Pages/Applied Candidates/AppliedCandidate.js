import { useState } from "react";
import { acceptIcon, rejectIcon } from "../../../../../utils/Icons";
import styles from "./AppliedCandidate.module.css";

export default function AppliedCandidate() {
  const [candidates, setCandidates] = useState(["Omkar", "Bhoir", "Omkar"]);
  return (
    <div className={styles.main}>
      <div className={styles.operational}>
        <CandidateDetailsCard
          candidateName="Omkar"
          candidateSkill="Python"
          Resume="Resume.pdf"
        />
        <CandidateDetailsCard
          candidateName="Omkar"
          candidateSkill="Python"
          Resume="Resume.pdf"
        />
        <CandidateDetailsCard
          candidateName="Omkar"
          candidateSkill="Python"
          Resume="Resume.pdf"
        />
        <CandidateDetailsCard
          candidateName="Omkar"
          candidateSkill="Python"
          Resume="Resume.pdf"
        />
        <CandidateDetailsCard
          candidateName="Omkar"
          candidateSkill="Python"
          Resume="Resume.pdf"
        />
        <CandidateDetailsCard
          candidateName="Omkar"
          candidateSkill="Python"
          Resume="Resume.pdf"
        />
      </div>
      <div className={styles.seperatorBody}>
        <div className={styles.seperator}></div>
      </div>
      <div className={styles.displayRanking}>
        <div className={styles.rankingContainer}>
          <div className={styles.heading}>
            <p>Ranking</p>
          </div>
          <RankList candidates={candidates} />
        </div>
      </div>
    </div>
  );
}

const RankerItem = () => {
  const handleClick = () => {
    console.log("Done");
  };
  return (
    <div>
      <li className={styles.rankingListItem}>
        <p>&emsp;Omkar Bhoir</p>
        <div className={styles.btnContainer}>
          <button onClick={handleClick} style={{ background: "#ff1744" }}>
            {acceptIcon}
          </button>
          <button
            onClick={handleClick}
            style={{ background: "cornflowerblue" }}
          >
            {rejectIcon}
          </button>
        </div>
      </li>
    </div>
  );
};

const RankList = ({ candidates }) => {
  return (
    <div className={styles.RankList}>
      <ol>{candidates && candidates.map((f) => <RankerItem />)}</ol>
    </div>
  );
};

const CandidateDetailsCard = ({ candidateName, candidateSkill, Resume }) => {
  return (
    <div className={styles.candidateDetailsCard}>
      <div className={styles.details}>
        <p>
          Name:<p>{candidateName}</p>
        </p>
        <p>
          Skills<p>{candidateSkill}</p>
        </p>
        <p>
          Resume:&nbsp;<p>{Resume}</p>
        </p>
      </div>
    </div>
  );
};

// const FileItem = ({ file, deleteFile }) => {
//     return (
//       <>
//         <li className={styles.fileItem} key={file.name}>
//           {fileAltIcon}
//           <p>{file.name}</p>
//           <div className={styles.actions}>
//             <div className={styles.loading}></div>
//             {file.isUploading && <button className={styles.faSpin} onClick={deleteFile(file.name)}>{spinnerIcon}</button>}
//             {!file.isUploading && <button onClick={deleteFile(file.name)}>{trashIcon}</button>}
//           </div>
//         </li>
//       </>
//     );
//   };
