import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { HashRouter, Link, Route, useNavigate} from "react-router-dom";
import styles from "./styles.module.css";

export default function Register() {
  let style={
    backgroundImage: "url('https://th.bing.com/th/id/OIP.CSeRaA6_F1_QnkgWTIcLCgHaE8?pid=ImgDet&w=750&h=500&rs=1')",
    height:'800px',
    width:'100%',
   paddingTop:'10px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',  
}
  try {
  } catch (error) {
    console.log(error.message);
  }
  const navigate=useNavigate();
  const [values, setValues] = useState({
    name: "",
    emailId: "",
    password: "",
    phoneNo: "",
    hostelName: "",
    collegeName:"",
    Gender:""
  });
  const [error, setError] = useState("");
  const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

  async function handle(e) {
    e.preventDefault();
    const url = "https://badbankserver12.herokuapp.com/api/bank/register";
    axios
      .post(url,{
        name: values.name,
        emailId: values.emailId,
        password: values.password,
        mobileNo: values.mobileNumber,
       
      },config
      )
      
      .then((res) => {
        if (res.status === 400) {
          console.log("Something went wrong");
        } else {
          alert("Registerd Successfully");
          navigate("/login")
          console.log(res);
        }
      })
      .catch((error) => {
        setError(error.response.data)
        console.log(error);
      });
      // console.log(data);
  }
 

  return (
    <>
    {/* <div className={styles.signup_container}> */}
				<div style={style}>
						<div className={styles.left} >
            <h1 className={styles.studenth1}>Create Account</h1>
            <form>
							<input
            className={styles.inputw}
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            /><br></br>
							
							
             <input
            className={styles.inputw}
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) =>
                setValues({ ...values, emailId: e.target.value })
              }
            /><br></br>
            <input
            className={styles.inputw}
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            /><br></br>
             <input
            className={styles.inputw}
              type="number"
              placeholder="Enter Your MobileNumber"
              onChange={(e) =>
                setValues({ ...values, mobileNumber: e.target.value })
              }
            /><br></br>
             	{error && <div className={styles.error_msg}>{error}</div>}
  
               </form>

						
					{/* </div>       */}
		</div>
    <center>
							<button type="submit" className={styles.green_btn} onClick={handle}>
								Sign Up
							</button>
              </center>
              </div>
         </>
  );
}
