import { useEffect, useState } from "react"

const Row = (props) => {
  
    const [date, setDate] =useState();
    useEffect(()=>{
        var time = new Date(0);
        time.setUTCSeconds(props.time);
        setDate(time);
        console.log(time);
    },[])

    useEffect(()=>{

    })

  return (
<>
<div className="w-full flex flex-row gap-4">
    <div>
        {props.title}
    </div>
    <div>
        {props.duration}
    </div>
    <div>
        {date?.getDate()}/{date?.getMonth()}/{date?.getFullYear()}
    </div>
</div>
</>
  )
}
export default Row