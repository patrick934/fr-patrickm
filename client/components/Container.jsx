import React, { useState, useEffect } from "react";
import ListItem from './ListItem';
import { ListGroup, Button, Navbar } from 'react-bootstrap';

const Container = props => {
  const [showItemContainer, setshowItemContainer] = useState({1: false, 2: false, 3: false, 4: false});
  const [itemContainer, setitemContainer] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/api')
      .then((data)=>data.json())
      .then((data)=>{
        setitemContainer(data);
      })
  },[])

  let display = [[],[],[],[]];
  itemContainer.forEach((el, i)=>{
    display[el.listId - 1].push(<ListItem keyVal={i} listId={el.listId} name={el.name} />)
  })

  const handleClick = (e) => {
    let value = Number(e.target.id);
    console.log(value)
    setshowItemContainer({...showItemContainer, [value]: !showItemContainer[value]})
  }

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>Click buttons to show 'name' details!</Navbar.Brand>
      </Navbar>
      <div>
        <div className="buttonContainer">
          <Button id="1" onClick={handleClick} variant="primary">List Id - 1</Button>
          {showItemContainer[1] &&
            <ListGroup >
              {display[0]}
            </ListGroup>
          }
        </div>
        <div className="buttonContainer">
          <Button id="2" onClick={handleClick} variant="primary">List Id - 2</Button>
          {showItemContainer[2] &&
            <ListGroup >
              {display[1]}
            </ListGroup>
          }
        </div>
        <div className="buttonContainer">
          <Button id="3" onClick={handleClick} variant="primary">List Id - 3</Button>
          {showItemContainer[3] &&
            <ListGroup >
              {display[2]}
            </ListGroup>
          }
        </div>
        <div className="buttonContainer">
          <Button id="4" onClick={handleClick} variant="primary">List Id - 4</Button>
          {showItemContainer[4] &&
            <ListGroup >
              {display[3]}
            </ListGroup>
          }
        </div>   
      </div>
    </div>
  )
}

export default Container