import React from "react";
import { ListGroup, Button} from 'react-bootstrap';

const ListContainer = props => {
    
  return (
    <div className="buttonContainer">
      <Button id={props.id} onClick={props.onClick} variant="primary">List Id - {props.id}</Button>
      {props.items &&
        <ListGroup >
          {props.display}
        </ListGroup>
      }
    </div>
  )
}

export default ListContainer