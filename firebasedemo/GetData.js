import { useState,useEffect } from "react"
import { collection,getDocs } from "firebase/firestore"
import { db } from "../firebase/Config"
function GetData(){
    const[data,setData]=useState([{
        
    }]);
    useEffect(()=>{
        const collectionRef=collection(db,"posts")
        getDocs(collectionRef)
        .then((snapshot)=>{
         let result=[]
         snapshot.forEach((val)=>{
            result.push({...val.data(),id:val.id})
         })
         setData(result);

        })
      
        

    },[])
    
      
    
    return(
        <div>
        <h2>{data}</h2>
  
        </div>
    )
}
export default GetData;