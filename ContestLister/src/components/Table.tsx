import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ContestContext } from "../assets/Context";

type contests = {
  id:Number
}

const Table = () => {
    const {filter} = useParams();
    const {contests} = useContext(ContestContext);
    useEffect(()=>{
      console.log('Table',contests);
      console.log(filter)
    })
  return (
    <div className="w-full h-screen flex justify-center items-center" >
      {
        contests.map((e)=>
          <div>Hi</div>)
      }
    </div>
  )
}
export default Table