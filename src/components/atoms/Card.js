import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Card = ({ className, children  }) => {
    return (
        <div className={clsx('card mb-3', className)}>
            { children}
        </div>
    );
}

Card.defaultProps = {
    style: { cursor: 'pointer' }
}

Card.propTypes = {
    style: PropTypes.object,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default Card;
