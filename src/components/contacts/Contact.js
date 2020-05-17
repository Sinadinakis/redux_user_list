import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Component
import Icon from '../atoms/Icon';
import Card from '../atoms/Card';
import { deleteContacts } from '../../actions/contactActions';

const Contact = ({ contact, deleteContacts }) => {
  const { id, name, email, phone } = contact;
  const [showContactInfo, setContactInfo] = useState(false);


  const onDeleteClick = id => {
    deleteContacts(id);
  };

  return (
    <Card className='card-body'>
      <h4>
        {name}{' '}
        <Icon
          icon="sort-down"
          onClick={() => setContactInfo(!showContactInfo)} 
        />
        <i
          className="fas fa-times"
          style={{ cursor: 'pointer', float: 'right', color: 'red' }}
          onClick={() => onDeleteClick(id)}
        />
        <Link to={`contact/edit/${id}`}>
          <i
            className="fas fa-pencil-alt"
            style={{
              cursor: 'pointer',
              float: 'right',
              color: 'black',
              marginRight: '1rem'
            }}
          />
        </Link>
      </h4>
      {showContactInfo ? (
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      ) : null}
    </Card>
  );
}


Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContacts: PropTypes.func.isRequired
};

export default connect(null, { deleteContacts })(Contact);
