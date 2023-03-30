import { useNavigate } from "react-router-dom";
import Navbar from "../../../../Navbar/UserNav";
import { useState } from "react";
import AppliedJobs from "../Applied Jobs/AppliedJobs";
import AvilableJobs from "../Available Jobs/AvailableJobs";
import History from "../History/History";
import styles from "./user.module.css";
import PDFViewer from "../PDFViewer/PDFViewer";
import Upload from "../UploadFiles/Upload";
// import Upload, { UploadForm } from "../UploadFiles/Upload";

function User() {
  const [active, setActive] = useState(3);

  const displayData = () => {
    switch (active) {
      case 1:
        return <UserPage />;
      case 2:
        return <AppliedJobs />;
      case 3:
        return <AvilableJobs />;
      case 4:
        return <History />;
      default:
        return <User />;
    }
  };

  return (
    <div className={styles.body}>
      <Navbar active={active} setActive={setActive} />
      <main>{displayData()}</main>
    </div>
  );
}

function UserPage() {
  const navigate = useNavigate();
  function navigatePage(e) {
    navigate(e);
  }

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.main}>
      <div className={styles.operational}>
        <div className={styles.buttons}>
          <div className={styles.btn}>
            <button onClick={() => navigatePage("/cvmaker")}>
              Create Resume
            </button>
          </div>
          <div className={styles.btn}>
            <button onClick={togglePopup}>Upload</button>
          </div>
        </div>
        <div className={styles.analyseBtn}>
          <div className={styles.btn}>
            <button>Analyze</button>
          </div>
        </div>
      </div>
      <div className={styles.seperatorBody}>
        <div className={styles.seperator}></div>
      </div>
      <PDFViewer />

      {/* Upload Window       */}
      {isOpen && <Upload isOpen={isOpen} setIsOpen={setIsOpen}/>}
    </div>
  );
}

export default User;
