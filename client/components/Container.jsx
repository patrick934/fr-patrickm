import React, { useState, useEffect } from "react";

const Container = props => {


  useEffect(()=>{
    fetch('http://localhost:3000/api')
      .then((data)=>data.json())
      .then((data)=>console.log(data))
  },[])

  return (
    <div>Hello World!!</div>
  )
}

export default Container