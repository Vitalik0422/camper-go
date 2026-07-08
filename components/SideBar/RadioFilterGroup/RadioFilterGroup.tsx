import React from 'react';

interface RadioOption {
  label: string;
  value: string;
}
interface RadioFilterGroupProps {
  legend: string;
  options: RadioOption[];
}

const RadioFilterGroup = ({ legend, options }: RadioFilterGroupProps) => {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {options.map(({ label, value }) => (
        <label key={label}>
          {label}
          <input type="radio" value={value} />
        </label>
      ))}
    </fieldset>
  );
};

export default RadioFilterGroup;
