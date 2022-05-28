import React,{useState,useEffect} from 'react'

export const Timerstartstop = ({start,end,isstart,stopapply}) => {
    let [timer,setTimer] = useState(start);
    // const [ids,setIds] =useState();
    // const [endt,setEndt] = useState(true);
   let timing = (i)=>{
     let id = setInterval(() => {
       i++;
       isstart=false;
       
       if(i>end){
         
         clearInterval(id)
         stopapply(isstart);
         
       }
       setTimer((prev)=>i);
     }, 1000);
   }
   useEffect(()=>{
     if(isstart){
      timing(start-1);
     }
   },[isstart])
    
  

   
    // console.log(`timer ${timer}`)
  return (
    <div>Counter : {timer} </div>
  )
}
