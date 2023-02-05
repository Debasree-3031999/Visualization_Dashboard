import logo from './logo.svg';
import './App.css';
import Data from './components/Data'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'
import * as d3 from "d3"


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/').then((res)=>{
        let a=[]
        console.log(res.data);
        for(let i=7;i<17;i++){
          // let x=res.data.getData[i].region?"NoRegion":res.data.getData[i].region;
          // let obj={
          //   letter:res.data.getData[i].country==""?"NoCountry":res.data.getData[i].country,
          //   frequency:res.data.getData[i].intensity/100
          // }
          a.push(res.data.getData[i].intensity)
        }
          console.log("++",a);
          setData(a);
      })
  },[])
  return (
    <div className="App">
      <Data width={1000} height={400} data={data} />
    </div>
  );
}

export default App;
