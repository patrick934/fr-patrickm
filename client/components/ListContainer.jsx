import React from "react";
import { ListGroup, Button} from 'react-bootstrap';

const ListContainer = (props) => {
  const { id, onClick, items, display } = props;
  return (
    <div key={id} className="buttonContainer">
      <Button id={id} onClick={onClick} variant="primary">List Id - {id}</Button>
      {items && (
        <ListGroup id={id}>
          {display}
        </ListGroup>
      )}
    </div>
  );
};

export default ListContainer;
