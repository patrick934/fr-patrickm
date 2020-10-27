import React from "react";
import { ListGroup } from 'react-bootstrap';

const ListItem = props => {
    
  return (
    <ListGroup.Item className="buttonItems" variant="secondary" key={props.keyVal}>
      {props.name}
    </ListGroup.Item>
  )
}

export default ListItem