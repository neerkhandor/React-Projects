//always explain the approach
//we will simply return some jsx
//single selection
//multiple selection

import { useState } from "react";
import data from "./data";
import "./style.css";


export default function Accordion(){
    const [selected,setSelected]=useState(null);
    const [enableMultiSelection,setEnableMultiSelection]=useState(false)
    const [multiple,setMultiple]=useState([])


    function handleSingleSelection(getCurrentId){
        // console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }
    function handleMultiSelection(getCurrentId){
        let cpyMutiple=[...multiple];
        const findIndex = cpyMutiple.indexOf(getCurrentId);
        //console.log(findIndex);
        if(findIndex === -1){
            cpyMutiple.push(getCurrentId);
        }
        else{
            cpyMutiple.splice(findIndex,1);
        }
        setMultiple(cpyMutiple);
    }
    console.log(selected,multiple); 
    return (
        <div className="wrapper">
            <button onClick ={()=>setEnableMultiSelection(!enableMultiSelection)} className="btn">Enable Multi Selection</button>
            <div className="accordion">
                {
                    data && data.length>0 ? (
                        data.map((dataItem)=>(
                            <div className="item">
                                <div onClick={
                                    enableMultiSelection  
                                    ? ()=>handleMultiSelection(dataItem.id)
                                    : ()=>handleSingleSelection(dataItem.id)
                                    } className="title">
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                { 
                                enableMultiSelection 
                                ? multiple.indexOf(dataItem.id) !== -1 &&
                                    (<div className="content">{dataItem.answer}</div>)
                                :
                                selected === dataItem.id && (<div className="content">{dataItem.answer}</div>)
                                    // selected===dataItem.id ?
                                    // <div className="content">{dataItem.answer}</div>
                                    // :null
                                }
                            </div>
                        ))
                    ):(
                        <div>No data found </div>
                    )
                }
            </div>
        </div>
    );
}