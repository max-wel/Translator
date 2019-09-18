import React from 'react';
import PropTypes from 'prop-types';

const TextArea = props => {
  const { name, placeholder, value, onChange, readOnly } = props;
  return (
    <div className="form-group">
      <textarea
        className="form-control form-control-lg mb-3"
        name={name}
        rows="5"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
    </div>
  );
};

TextArea.defaultProps = {
  readOnly: false
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  readOnly: PropTypes.bool
};

export default TextArea;
