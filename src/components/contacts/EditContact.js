import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getContact, updateContact } from '../../actions/contactActions';
import TextInputGroup from '../layout/TextInputGroup';

const EditContact = ({ contact, id, history, getContact, updateContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const { name: contactName, email: contactEmail, phone: contactPhone } = contact;

  useEffect(
    () => {
      getContact(id)
      setName(contactName || '')
      setPhone(contactPhone || '')
      setEmail(contactEmail || '')
    }, [getContact, contactName, contactPhone, contactEmail, id])

  const clearState = () => {
    setName('');
    setPhone('');
    setEmail('');
    setErrors({});
  }

  const onSubmit = (e) => {
    e.preventDefault();

    // Check For Errors
    if (name === '') {
      setErrors({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      setErrors({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      setErrors({ errors: { phone: 'Phone is required' } });
      return;
    }

    const updContact = {
      id, 
      name,
      email,
      phone
    };

    updateContact(updContact)

    //// UPDATE CONTACT ////

    clearState();
    history.push('/');
  };

  return (
    <div className="card mb-3">
      <div className="card-header">Edit Contact</div>
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <TextInputGroup
            label="Name"
            name="name"
            placeholder="Enter Name"
            value={name}
            onChange={e => setName(e.target.value)}
            error={errors.name}
          />
          <TextInputGroup
            label="Email"
            name="email"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={errors.email}
          />
          <TextInputGroup
            label="Phone"
            name="phone"
            placeholder="Enter Phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            error={errors.phone}
          />
          <input
            type="submit"
            value="Update Contact"
            className="btn btn-light btn-block"
          />
        </form>
      </div>
    </div>
  );
}


EditContact.propTypes = {
  contact: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired
}

export default connect(
  (state, props) => ({
    contact: state.contact.contact,
    id: props.match.params.id
  }),
  { getContact, updateContact }
)(EditContact);
