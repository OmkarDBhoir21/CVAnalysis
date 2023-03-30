import { useState } from "react";
import httpClient from "../../../httpClient";
import stylesReg from "./register.module.css";
import stylesLog from "../LOGIN/login.module.css";

// ********** Candidate forms **********

export const UserRegisterForm = () => {
  const user = "candidate";
  const [fname, setFirstName] = useState();
  const [lname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [mobNo, setPhoneNum] = useState();
  const [password, setPass] = useState();

  const signUpUser = async () => {
    console.log(user, fname, lname, email, mobNo, password);
    try {
      await httpClient.post("//localhost:5000/register", {
        user,
        fname,
        lname,
        email,
        mobNo,
        password,
      });
      window.location.href = "/";
    } catch (error) {
      if (error.response.status === 401) {
        alert("Invalid credintials");
      }
      if (error.response.status === 409) {
        alert("User already exist!");
      }
    }
  };
  return (
    <div>
      <div>
        <form>
          <div className={stylesReg.inputField}>
            <input
              type="text"
              placeholder="First name"
              required
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className={stylesReg.inputField}>
            <input
              type="text"
              placeholder="Last name"
              required
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className={stylesReg.inputField}>
            <input
              type="text"
              placeholder="Email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className={stylesReg.inputField}>
            <input
              type="number"
              placeholder="Enter mobile no."
              required
              onChange={(e) => {
                setPhoneNum(e.target.value);
              }}
            />
          </div>
          <div className={stylesReg.inputField}>
            <input
              type="password"
              placeholder="Enter Password"
              required
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </div>
          <div className={stylesReg.inputField}>
            <button type="button" onClick={() => signUpUser()}>
              Signup
            </button>
          </div>
          <div className={stylesReg.loginLink}>
            <label>Already have an account?</label>
            <a href="/login"> Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export const RecruiterRegisterForm = () => {
  const user = "recruiter";
  const [orgName, setOrgName] = useState();
  const [email, setEmail] = useState();
  const [mobNo, setPhoneNum] = useState();
  const [password, setPass] = useState();

  const signUpUser = async () => {
    console.log(user, orgName, email, mobNo, password);
    try {
      await httpClient.post("//localhost:5000/register", {
        user,
        orgName,
        email,
        mobNo,
        password,
      });
      window.location.href = "/recruiter";
    } catch (error) {
      if (error.response.status === 401) {
        alert("Invalid credintials");
      }
      if (error.response.status === 409) {
        alert("User already exist!");
      }
    }
  };
  return (
    <div>
      <div>
        <form>
          <div className={stylesReg.inputField}>
            <input
              type="text"
              placeholder="Organization Name"
              required
              onChange={(e) => {
                setOrgName(e.target.value);
              }}
            />
          </div>
          <div className={stylesReg.inputField}>
            <input
              type="text"
              placeholder="Email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className={stylesReg.inputField}>
            <input
              type="number"
              placeholder="Enter contact number"
              required
              onChange={(e) => {
                setPhoneNum(e.target.value);
              }}
            />
          </div>
          <div className={stylesReg.inputField}>
            <input
              type="password"
              placeholder="Enter Password"
              required
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </div>
          <div className={stylesReg.inputField}>
            <button type="button" onClick={() => signUpUser()}>
              Signup
            </button>
          </div>
          <div className={stylesReg.loginLink}>
            <label>Already have an account?</label>
            <a href="/login"> Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

// *********** Login forms ***********

export const UserLoginForm = ({userType}) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const loginuser = async () => {
    console.log(email, password);

    try {
      const resp = await httpClient.post("//localhost:5000/login", {
        userType,
        email,
        password,
      });
      console.log(resp);
      if (userType === "candidate") window.location.href = "/user";
      else if(userType === "recruiter") window.location.href = "/recruiter";
    } catch (error) {
      if (error.response.status === 401) {
        alert("Invalid credintials");
      }
    }
  };
  return (
    <div className="">
      <form>
        <div className={stylesLog.inputField}>
          <input
            type="text"
            placeholder="Email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={stylesLog.inputField}>
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
        </div>
        <div className={stylesLog.fp}>
          <a href=" ">forget password?</a>
        </div>
        <div className={stylesLog.inputField}>
          <button type="button" onClick={() => loginuser()}>
            Login
          </button>
        </div>
        <div className={stylesLog.signupLink}>
          <p>
            Don't have an account?<a href="/register"> Signup</a>
          </p>
        </div>
      </form>
    </div>
  );
};
