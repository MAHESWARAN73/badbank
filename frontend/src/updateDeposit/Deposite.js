import { useState } from "react";
import {useContext} from "react";
import axios from "axios";
export default function Deposit(){

let style={
  backgroundImage: "url('https://tse2.mm.bing.net/th?id=OIP.zGJ1kXaqyk4h431M3EEeIgHaEC&pid=Api&P=0')",
  height:'95vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

}

const token=localStorage.getItem('x-auth');
const[bal,setbal]=useState(0);
 const [values,setValues]=useState(0);
 console.log(values)
 const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-auth':token
    }
  };
 async function Updatedeposite(e) {
    e.preventDefault();
    const url = "https://badbankserver12.herokuapp.com/api/bank/update";
    axios
      .post(url, {
        deposite:values
      },config
      )
      
      .then((res) => {
       
        console.log(res.data)
        setbal(res.data.balance)
      })
      .catch((error) => {
        // if (
        //   error.response &&
        //   error.response.status >= 400 &&
        //   error.response.status <= 500
        // ) 
        console.log(error);
          // console.log(error)
        })
      // console.log(data);
  }
  
  
  

 
  
 
  return(<>

<center>
<div style={style}>
  
  <h4>Account Balance is ${bal}</h4>
  <h5>Kindly enter a value to deposit!</h5>
  <label>
  <input
							type="number"
							placeholder="Enter amount"
							name="deposit"
              onChange={(e) =>
                setValues(Number(e.target.value))
              }
							required
							
						/>
 <button onClick={Updatedeposite}>Submit</button>
  </label>
  {/* <ATMDeposit onChange={handleChange}></ATMDeposit> */}
 
  </div>
  </center>
  </>)
}