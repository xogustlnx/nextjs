import { useEffect } from "react"
import {useState} from react

export default function rocksp(){

    const [hrsp, setHrsp]=useState("")
    const [crsp, setCrsp]=useState("")
    const [round, setRound]=useState(10)
    const [timer ,setTimer] =useState(3)

    useEffect(()=>{
        const time= setInterval(()=>{
            setTimer(timer--)
        },1000)
        setCrsp(Math.floor(Math.random()*3))
    },[])

    

    
    
    return<>
        
        <button onClick={e=>setHrsp(0)}>묵</button>
        <button onClick={e=>setHrsp(1)}>찌</button>
        <button onClick={e=>setHrsp(2)}>빠</button>
        <div>
            Yours : {hrsp}
            Computers: {crsp}
        </div>
    </>
    
    
}