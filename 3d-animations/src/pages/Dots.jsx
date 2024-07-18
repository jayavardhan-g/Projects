import { useEffect, useRef, useState } from "react";

const Dots = () => {
    let colors = ['red','white','blue','green','yellow'];
    let dots= [];
    const [points, setPoints] = useState([]);
    const ref = useRef();
    var ctx = ref.current?.getContext("2d");
    const drawDots = () => {
        dots.forEach(dot => {
            ctx.fillStyle = dot.color;
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI*2);
            ctx.fill();
            // console.log(dot);
        })
    }
    useEffect(()=>{
        ctx = ref.current?.getContext("2d");
        let height = window.innerHeight;
        let width = window.innerWidth;

        for(let i=0;i<25;i++){
            dots.push({
                x:Math.random() * width,
                y:Math.random() * height,
                color:colors[Math.floor(Math.random()*5)],
                size:Math.random()*3+5
            })
        }
        
        console.log(dots);
        drawDots();
        console.log(ctx)
    },[ctx])

    addEventListener('mousemove',(event)=>{
        ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
        drawDots();
        let x=  event.screenX  ;
        let y= event.screenY + window.innerHeight-window.outerHeight ;

        console.log(event)
        dots.forEach((dot)=>{
            let distance = (dot.x-x)**2 + (dot.y-y)**2;
            // console.log(distance)
            if(distance<30000){
                ctx.strokeStyle = dot.color;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(dot.x, dot.y);
                ctx.lineTo(x, y);
                ctx.stroke();
            }
        })
    })
    
    return (
    <>
    <div className="h-screen w-full flex justify-center items-center" >
        Hi
    </div>
      <canvas ref={ref} width={window.innerWidth} height={window.innerHeight} className="-z-20 bottom-0 right-0 absolute" style={{backgroundImage: "linear-gradient(-225deg, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%)"}} >
      </canvas>
    </>
  );
};
export default Dots;
