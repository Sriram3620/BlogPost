import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Display from './blogs/Display';
import Display2 from './blogs/Display2';
import post1, { post3 } from './blogs/Title';
import { post2 } from './blogs/Title';
import Display3 from './blogs/Display3';
import { useRef } from "react"
import { useEffect } from "react"
import arr from './blogs/Array';
 export default function App()
 {
    const [index,setindex]=useState(false)
    const [index2,setindex2]=useState(false)
    const [index3,setindex3]=useState(false)
    function SetIndex()
    {
      setindex(!index)
    }
    function SetIndex2()
    {
      setindex2(!index2)
    }
    function SetIndex3()
    {
        setindex3(!index3)
    }
  
    function Search(event)
    {
        console.log(event.key)
    }
     
   let hide1="block";
   let hide2="block";
   let hide3="show";
 
   const[val,setval]=useState(false);
   const[val2,setval2]=useState(false);
   const[val3,setval3]=useState(false)

 function change()
 {
  let input=document.getElementById("input");
  let inputVal=input.value;
  let n=0;

   let t1=post1.title;
   let t2=post2.title;
   let t3=post3.title;
   if(inputVal.toLowerCase()=="the best")
   {
      setval(true)
      setval2(false)
      setval3(false) 
     
   }
   else if(inputVal.toLowerCase()=="a time to kill")
   {
     setval2(true)
     setval(false) 
     setval3(false)
   }
   else if(inputVal.toLowerCase()=="brave new world")
   {
      setval3(true)
      setval(false)
      setval2(false)
   }
   else if(inputVal=="")
   {
    setval(false)
    setval2(false)
    setval3(false) 
   }
   else{
    setval(false)
    setval2(false)
    setval3(false) 
   
   }
   
 }

  
    return (
      <div className='Center'>
        <button className='btn' onClick={SetIndex}>Post1</button>
        {index && <Display/>}
        <button className='btn' onClick={SetIndex2}>Post2</button>
        {index2 && <Display2/>}
        <button className='btn' onClick={SetIndex3}>Post3</button>
        {index3 && <Display3/>}
        <div className="search-con">
        <input id='input'></input>
        <button onClick={change}>Search</button>
        {val && <Display />}
        {val2 && <Display2 />}
        {val3 && <Display3 />}
        </div>
      </div>
    );
 } 
    

