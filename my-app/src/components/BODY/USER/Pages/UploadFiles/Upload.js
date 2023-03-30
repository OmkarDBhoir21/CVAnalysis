import { React, useState } from "react";
import styles from "./Upload.module.css";
import {
  uploadIcon,
  trashIcon,
  fileAltIcon,
  spinnerIcon,
} from "../../../../../utils/Icons";
import httpClient from "../../../../../httpClient";

export default function Upload({isOpen, setIsOpen}) {
  // const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [files, setFiles] = useState([]);

  const removeFile = (filename) => {
    setFiles(files.filter((file) => file.name !== filename));
  };

  return (
    <div>
      <button onClick={togglePopup}>Click</button>
      {isOpen && (
        <>
          <FileUpload
            files={files}
            setFiles={setFiles}
            removeFile={removeFile}
            handleClose={togglePopup}
          />
        </>
      )}
    </div>
  );
}

const FileUpload = ({ files, setFiles, removeFile, handleClose }) => {
  const uploadHandler = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    file.isUploading = true;
    setFiles([files, file]);
    console.log(file)

    const formData = new FormData();
    formData.append("newFile", file, file.name);
    try {
      await httpClient.post("//localhost:5000/upload", { formData });
      file.isUploading = false;
      setFiles([files, file]);
    } catch (error) {
      if (error.response.status === 503) {
        alert("Uploading failed");
        removeFile(file.name);
      }
    }
  };
  return (
    <div className={styles.uploadWindow}>
      <div className={styles.box}>
        <span className={styles.closeIcon} onClick={handleClose}>
          X
        </span>
        <div className={styles.fileCard}>
          <div className={styles.fileInputs}>
            <input type="file" onChange={uploadHandler} />
            <button>
              {uploadIcon}
              Upload
            </button>
          </div>

          <p className="main">Supported files</p>
          <p className="info">PDF, JPG, PNG</p>
        </div>
        <FileList files={files} removeFile={removeFile} />
      </div>
    </div>
  );
};

const FileItem = ({ file, deleteFile }) => {
  return (
    <>
      <li className={styles.fileItem} key={file.name}>
        {fileAltIcon}
        <p>{file.name}</p>
        <div className={styles.actions}>
          <div className={styles.loading}></div>
          {file.isUploading && <button className={styles.faSpin} onClick={deleteFile(file.name)}>{spinnerIcon}</button>}
          {!file.isUploading && <button onClick={deleteFile(file.name)}>{trashIcon}</button>}
        </div>
      </li>
    </>
  );
};

const FileList = ({ files, removeFile }) => {
  const deleteFileHandler = (_name) => {
    // axios.delete(`http://localhost:8080/upload?name=${_name}`)
    //     .then((res) => removeFile(_name))
    //     .catch((err) => console.error(err));
  };
  return (
    <ul className={styles.fileList}>
      {files &&
        files.map((f) => (
          <FileItem key={f.name} file={f} deleteFile={deleteFileHandler} />
        ))}
    </ul>
  );
};
