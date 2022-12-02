import  React, { useState , useEffect } from 'react'

export const Timer = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
        <span> {date.toLocaleTimeString()} {date.toLocaleDateString()}</span>
    )
}

export default Timer;

