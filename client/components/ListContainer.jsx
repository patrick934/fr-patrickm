import React from "react";
import { ListGroup, Button} from 'react-bootstrap';

const ListContainer = (props) => {
  const { id, onClick, items, display } = props;
  return (
    <div className="buttonContainer">
      <Button id={id} onClick={onClick} variant="primary">List Id - {id}</Button>
      {items && (
        <ListGroup>
          {display}
        </ListGroup>
      )}
    </div>
  );
};

export default ListContainer;
