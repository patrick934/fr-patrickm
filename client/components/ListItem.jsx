import React from "react";
import { ListGroup } from 'react-bootstrap';

const ListItem = (props) => {
  const { keyVal, name } = props;
  return (
    <ListGroup.Item className="buttonItems" variant="secondary" key={keyVal}>
      {name}
    </ListGroup.Item>
  );
};

export default ListItem;
