import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ContestContext } from "../assets/Context";
import Row from "./Row";

const Table = () => {
    const {filter} = useParams();
    const {contests} = useContext(ContestContext);
    useEffect(()=>{
      console.log('Table',contests);
      console.log(filter)
    })
  return (
    <div className="w-full h-screen flex justify-center flex-col items-center" >
      {
        contests?.map((e)=>
            <Row title={e.name} duration={e.durationSeconds} time={e.startTimeSeconds} />
        )
      }
    </div>
  )
}
export default Table