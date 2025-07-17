import { useEffect } from "react"

export default function ErrorPage({errMessage, setErrMessage}){
  
       useEffect(()=>{
        document.body.style.overflow ="hidden";
        return ()=>{
        document.body.style.overflow ="scroll"
        }
    },[])
    return(
        <>
        <div className="errorConatiner">
        <div className="modalWrapper"  ></div>
        <div className="errorBoxStyle" onClick={()=>setErrMessage(false)}> 
        <h1>{errMessage}</h1>
        <p>Click Anywhere on this frame</p>
        </div>
        </div>
        </>
    )
}