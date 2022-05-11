import React from 'react';
import { ListGroup as BootstrapListGroup } from 'react-bootstrap';

function ListGroupItem(props) {
  const {
    children,
    ...otherProps
  } = props;

  return (
    <BootstrapListGroup.Item {...otherProps}>
      {children}
    </BootstrapListGroup.Item>
  );
}

export default ListGroupItem;