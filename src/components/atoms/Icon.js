import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ style, icon, onClick }) => {
    return (
        <i
            onClick={() => onClick()}
            className={`fas fa-${icon}`}
            style={style}
        />
    );
}

Icon.defaultProps = {
    style: { cursor: 'pointer' }
}

Icon.propTypes = {
    style: PropTypes.object,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default Icon;
