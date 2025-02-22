import axios from 'axios';
import React, { Children, createContext, useEffect, useState } from 'react'

export let myContext = createContext();
const Camp = ({children}) => {

    let [tents,Settents]=useState([]);
    let [hotels,Sethotels]=useState([]);
    let [homeStays,SethomeStays]=useState([]);

    console.log(tents);
    console.log(hotels);
    console.log(homeStays);

    useEffect(()=>{
        axios.get("http://localhost:4001/tents").then((res)=>{Settents(res.data)})
        axios.get("http://localhost:4001/hotels").then((res)=>{Sethotels(res.data)})
        axios.get("http://localhost:4001/homeStays").then((res)=>{SethomeStays(res.data)})
    },[])
  return (
    <div>
      <myContext.Provider value={{tents,hotels,homeStays}}>{children}</myContext.Provider>
    </div>
  )
}

export default Camp
