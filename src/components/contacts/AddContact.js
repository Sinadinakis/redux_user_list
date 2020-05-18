import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

// Components
import Card from '../atoms/Card';
import TextInputGroup from '../layout/TextInputGroup';
import { addContacts } from '../../actions/contactActions';

const AddContact = ({ addContacts, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

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
      setErrors({ name: 'Name is required' });
      return;
    }

    if (email === '') {
      setErrors({ email: 'Email is required' });
      return;
    }

    if (phone === '') {
      setErrors({ phone: 'Phone is required' });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    addContacts(newContact)

    clearState();
    history.push('/');
  };

  console.log('name', errors.name)

  return (
    <Card>
      <div className="card-header">Add Contact</div>
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
            value="Add Contact"
            className="btn btn-light btn-block"
          />
        </form>
      </div>
    </Card>
  );
}

AddContact.propsTypes = {
  addContacts: PropTypes.func.isRequired
}

export default connect(null, { addContacts })(AddContact);
