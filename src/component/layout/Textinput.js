import React from 'react';
import PropTypes from 'prop-types';


const Textinput =({
    label,
    name,
    value,
    placeholder,
    type,
    onchange
}) => {
    return (
        <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input
                    type={type}
                    name={name}
                    className="form-control form-control-lg"
                    placeholder="Enter Name..."
                    value = {value}
                    onChange={onChange}
                />
                </div>
            
    );
};

Textinput.PropTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    types: PropTypes.string.isRequired,
    onChange: PropTypes.string.isRequired,

}

Textinput.defaultProps = {
    type: 'text'
}

export default Textinput ;