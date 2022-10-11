
import React from 'react';
import { DropdownProps, Options } from '../../types';

const Dropdown = ({ value, options, onChange, style }: DropdownProps) => {
  return (
    <label>
      <select value={value} onChange={onChange} style={style}>
        {options.map(({ label, value }: Options) => (
          <option value={value} key={label}>{label}</option>
        ))}
      </select>
    </label>
  );
};

export default Dropdown;