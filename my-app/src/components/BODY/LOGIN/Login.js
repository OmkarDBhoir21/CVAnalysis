import { useState } from "react";
import styles from "./login.module.css";
import Navbar from "../../Navbar/NavbarT2";
import { UserLoginForm } from "../REGISTER/Forms";

function Login() {
  return (
    <div>
      <LoginPage />
    </div>
  );
}

function LoginPage() {
  const [userType, setUserType] = useState("candidate");

  const handleCheck = (e) => {
    setUserType(e.target.value);
  };
  return (
    <div>
      <Navbar />
      <div className={styles.center}>
        <div className={styles.center1}>
          <div className={styles.cardHeader}>
            <div className={styles.title}>
              <h1>Login</h1>
            </div>
            <div className={styles.radioContainer}>
              <div className={styles.radioBtnContainer}>
                <input
                  type="radio"
                  name="candidate"
                  value="candidate"
                  id="candidate"
                  checked={userType === "candidate"}
                  onChange={handleCheck}
                />
                <label htmlFor="candidate">candidate</label>
              </div>
              <div className={styles.radioBtnContainer}>
                <input
                  type="radio"
                  name="recruiter"
                  value="recruiter"
                  id="recruiter"
                  checked={userType === "recruiter"}
                  onChange={handleCheck}
                />
                <label htmlFor="recruiter">recruiter</label>
              </div>
            </div>
          </div>
          <UserLoginForm userType={userType} />
        </div>
        <div className={styles.center2}></div>
      </div>
    </div>
  );
}

export default Login;
