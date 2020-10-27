import React, { useState, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import ListItem from './ListItem';
import ListContainer from './ListContainer';

const Container = () => {
  const [showItemContainer, setshowItemContainer] = useState({
    1: false, 2: false, 3: false, 4: false,
  });
  const [itemContainer, setitemContainer] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api')
      .then((data) => data.json())
      .then((data) => {
        setitemContainer(data);
      });
  }, []);

  const display = [[], [], [], []];
  itemContainer.forEach((el, i) => {
    display[el.listId - 1].push(<ListItem keyVal={i} listId={el.listId} name={el.name} />);
  });

  const handleClick = (e) => {
    const value = Number(e.target.id);
    setshowItemContainer({ ...showItemContainer, [value]: !showItemContainer[value] });
  };

  return (
    <div id="listNavContainer">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>Toggle buttons to show 'name' details!</Navbar.Brand>
      </Navbar>
      <div id="listContainer">
        <ListContainer id={1} onClick={handleClick} items={showItemContainer[1]} display={display[0]} />
        <ListContainer id={2} onClick={handleClick} items={showItemContainer[2]} display={display[1]} />
        <ListContainer id={3} onClick={handleClick} items={showItemContainer[3]} display={display[2]} />
        <ListContainer id={4} onClick={handleClick} items={showItemContainer[4]} display={display[3]} />
      </div>
    </div>
  );
};

export default Container;
