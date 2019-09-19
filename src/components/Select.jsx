import React from 'react';
import languages from '../services/languages';

const Select = props => {
  const { name, value, onChange } = props;
  return (
    <div className="form-group">
      <select
        className="form-control"
        value={value}
        name={name}
        onChange={onChange}
      >
        <option value="">Select Language</option>
        {languages.map(({ code, name: languageName }) => (
          <option key={code} value={code}>
            {languageName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
