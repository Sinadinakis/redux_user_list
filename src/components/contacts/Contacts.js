import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import Contact from './Contact';
import { getContacts } from '../../actions/contactActions';

const Contacts = ({ contacts, getContacts }) => {
  useEffect(
    () => {
      getContacts()
    }, [getContacts])

  return (
    <Fragment>
      <h1 className="display-4 mb-2">
        <span className="text-danger">Contact</span> List
        </h1>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
}

Contacts.protoType = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
}

export default connect(
  state => ({
    contacts: state.contact.contacts
  }),
  { getContacts }
)(Contacts);
