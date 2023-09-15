
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Main(){

    let deposite={
        backgroundColor: "blue", /* Green */
       border: "none",
       color: "white",
       padding: '10px 22px',
       textalign: "center",
       textdecoration: "none",
       display: "inline-block",
       fontSize: "16px",
       fontWeight:"bold",
       width:"100%"
       
    }
    let withdraw={
        backgroundColor: "orange", /* Green */
       border: "none",
       color: "white",
       padding: '10px 22px',
       textalign: "center",
       textdecoration: "none",
       display: "inline-block",
       fontSize: "16px",
       fontWeight:"bold",
       width:"100%"
    } 
    const navigate=useNavigate();
    async function dep(){
        navigate('/deposite')
    }
    async function wit(){
        navigate('/withdrawal')
    }
    return(
        <>
        <form >
        <button style={deposite} onClick={dep}>Deposite</button><br></br>
        <button style={withdraw} onClick={wit}>Withdraw</button>
        </form>
        
        </>
    )
}