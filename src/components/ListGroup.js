import React from 'react';
import { ListGroup as BootstrapListGroup } from 'react-bootstrap';
import ListGroupItem from './ListGroupItem';

function ListGroup(props) {
  const {
    children,
    ...otherProps
  } = props;

  return (
    <BootstrapListGroup {...otherProps}>
      {children}
    </BootstrapListGroup>
  );
}

export default Object.assign(ListGroup, {
  Item: ListGroupItem,
});