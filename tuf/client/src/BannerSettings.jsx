import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Switch from '@mui/material/Switch';
import { useContext, useEffect, useState } from 'react';
import { BannerContext } from './BannerContext';
import { useNavigate } from 'react-router-dom';

const Label = ()=>{
return(
<div className='text-center text-lg'>
    Pick the date and time
</div>
)
}

export default function BannerSettings() {
    const {banner,setBanner}= useContext(BannerContext);

    const [date,setDate] = useState(new Date());
    const [title,setTitle] = useState("");
    const [link,setLink] = useState("");
    const [on,setOn] = useState(true);

    const submit = async ()=>{
        // const data = {date,on,link,title};
        // console.log(data);        
        const res = await fetch("https://tufbackend-docm.onrender.com/update",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({date,on,link,title}),
        })

        console.log(res.status);

    }

    useEffect(()=>{
        setDate(new Date(banner.BannerTime));
        setLink(banner.BannerLink);
        setOn(banner.BannerVisibility);
        setTitle(banner.BannerTitle);
    },[banner])

    return (

<div className='flex justify-start flex-col w-full'>  

<div>
    <Switch className='border-[#d92929] border-2 rounded-full' onClick={()=>{setOn(!on)}} checked={on} />
</div>

<div>
    <label htmlFor="username" className="block text-sm text-white p-2 m-2">Title for the banner</label>
    <input type="text" placeholder="John Doe" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="bg-white mt-2 w-full text-black  rounded-lg border border-gray-200 px-5 py-2.5" />
</div>
<div>
    <label htmlFor="username" className="block text-sm text-white p-2 m-2">Link for the banner</label>
    <input type="text" placeholder="John Doe" value={link} onChange={(e)=>{setLink(e.target.value)}} className="bg-white mt-2 w-full text-black  rounded-lg border border-gray-200 px-5 py-2.5" />
</div>


<div className='bg-white w-fit rounded-md p-2 mt-4'>
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
            'DateTimePicker',
            'MobileDateTimePicker',
            'DesktopDateTimePicker',
            'StaticDateTimePicker',
        ]}
        >
        <DemoItem label={<Label/>}>
          <DateTimePicker onChange={(newdate)=>{setDate(newdate.$d)}} defaultValue={dayjs(date)} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
</div>

<div className='w-full m-4 p-4 flex justify-center'>

    <button class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#e11d48] rounded-lg hover:bg-[#ff4b72] " onClick={submit}>
        Submit
    </button>
</div>

</div>
  );
}
