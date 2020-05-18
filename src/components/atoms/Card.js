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
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Card;
