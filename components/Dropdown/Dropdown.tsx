
import * as React from 'react';

const DropDown = () => {
  const options = [
    { label: 'Fruit', value: 'fruit' },
    { label: 'Vegetable', value: 'vegetable' },
    { label: 'Meat', value: 'meat' },
  ];

  const [value, setValue] = React.useState('fruit');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Dropdown
        options={options}
        value={value}
        onChange={handleChange}
      />

      <p>We eat {value}!</p>
    </div>
  );
};

const Dropdown = ({ value, options, onChange }) => {
  return (
    <label>
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default DropDown;