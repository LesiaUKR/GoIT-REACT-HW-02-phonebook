import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, DeleteButton, ListItemName } from './ContactItem.styled';
import { HiUser } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ListItem>
      <HiUser />
      <ListItemName>
        {name}: {number}
      </ListItemName>
      <DeleteButton type="button" id={id} onClick={() => onDeleteContact(id)}>
        <MdDelete />
        Delete
      </DeleteButton>
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
