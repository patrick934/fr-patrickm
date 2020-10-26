import React, { useState, useEffect } from "react";
import ListItem from './ListItem';
import { ListGroup, Button, Navbar } from 'react-bootstrap';

const Container = props => {
  const [showItemContainer, setshowItemContainer] = useState({1: true, 2: false, 3: false, 4: false});
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
    let value = Number(e.target.id) - 1;
    let newVal = showItemContainer;
    newVal[value] = false;
    setshowItemContainer(newVal)
  }

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>Fetch</Navbar.Brand>
      </Navbar>
      <div>
        <Button id="1" onClick={handleClick} variant="primary">List Id - 1</Button>
        {showItemContainer["1"] &&
          <ListGroup >
            {display[0]}
          </ListGroup>
        }
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand id="2">List Id - 2</Navbar.Brand>
        </Navbar>
        {showItemContainer[2] &&
          <ListGroup >
            {display[1]}
          </ListGroup>
        }
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand id="3">List Id - 3</Navbar.Brand>
        </Navbar>
        {showItemContainer[3] &&
          <ListGroup >
            {display[2]}
          </ListGroup>
        }
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand id="4">List Id - 4</Navbar.Brand>
        </Navbar>
        {showItemContainer[4] &&
          <ListGroup >
            {display[3]}
          </ListGroup>
        }
      </div>
    </div>
  )
}

export default Container