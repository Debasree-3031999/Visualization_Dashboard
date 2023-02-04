import React from 'react'
import axios  from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';

export default function Data() {
  const [data,setData] =useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8080/').then((res)=>{
        console.log(res.data);
        setData(res.data);
    })
  },[]) 
  return (
    <div>
      
    </div>
  )
}
