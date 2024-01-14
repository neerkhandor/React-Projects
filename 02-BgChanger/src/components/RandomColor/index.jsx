// we will take two staes one will be for type ie
// and second will be store current color

import { useState } from "react";
import "./style.css"
import { useEffect } from "react";
export default function RandomColor() {
    const [type, setType] = useState("hex");
    const [color, setColor] = useState("#123456");
    function randomColorUtility(length){
        return Math.floor(Math.random()*length);
    }
    function handleCreateRandomHexColor(){
        // # +6 difits
        const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor="#";
        for(let i=0;i<6;i++){
            hexColor+=hex[randomColorUtility(hex.length)]
        }
        console.log(hexColor)
        setColor(hexColor)
    }
    function handleCreateRandomRGBColor(){
        const r=randomColorUtility(256)
        const g=randomColorUtility(256)
        const b=randomColorUtility(256)
        setColor(`rgb(${r},${g},${b})`)

    }
    console.log(color);
    useEffect(()=>{
        if(type==='rgb'){
            handleCreateRandomRGBColor()
        }
        else{
            handleCreateRandomHexColor()
        }
    },[type])
    return(
    <div style={{
        width:"100vw",
        height:"100vh",
        backgroundColor:color,
        
    }}>
            <div className="colors">
                <button onClick={()=>setType('hex')}>Hex Color</button>
                <button onClick={()=>setType('rgb')}>RGB Color</button>
                <button onClick={type==='hex' ? handleCreateRandomHexColor : handleCreateRandomRGBColor}>Generate Color</button>
        
            </div>
            <div className="result">
                <h1>{type === 'rgb' ? 'RGB Color' : 'HEX Color'}</h1>
                <h1>{color}</h1>
            </div>
    </div>
    );
    }
