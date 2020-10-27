import React from "react";
import { ListGroup } from 'react-bootstrap';

const ListItem = (props) => {
  const { name } = props;
  return (
    <div>
      <ListGroup.Item className="buttonItems" variant="secondary">
        {name}
      </ListGroup.Item>
    </div>
  );
};

export default ListItem;
