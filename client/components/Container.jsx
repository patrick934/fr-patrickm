import React, { useState, useEffect } from "react";
import ListItem from './ListItem';


const Container = props => {

  const [showItemContainer, setshowItemContainer] = useState([[true],[true],[true],[true]]);
  const itemContainer = [[],[],[],[]]

  useEffect(()=>{
    fetch('http://localhost:3000/api')
      .then((data)=>data.json())
      .then((data)=>{
        data.forEach((el)=>{
          itemContainer[el.listId - 1].push(el);
        })
      })
  },[])


  console.log(itemContainer)

  return (
    <div>Hello World!!
      <ListItem />
      <div>
          <div>
            {itemContainer[1]}
          </div>
      </div>
    </div>
  )
}

export default Container