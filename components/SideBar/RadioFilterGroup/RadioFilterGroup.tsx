'use client';

import { formatLabel } from '@/lib/utils/formatLabel';
import css from './RadioFilterGroup.module.css';

interface RadioFilterGroupProps {
  legend: string;
  options: string[];
  name: string;
  value?: string;
}

const RadioFilterGroup = ({
  legend,
  options,
  name,
  value,
}: RadioFilterGroupProps) => {
  const handleMouseDown = (e: React.MouseEvent<HTMLLabelElement>) => {
    const input = e.currentTarget.querySelector('input');
    if (input) {
      input.dataset.wasChecked = String(input.checked);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    const input = e.currentTarget.querySelector('input');
    if (input && input.dataset.wasChecked === 'true') {
      input.checked = false;
    }
  };

  return (
    <fieldset className={css.radioFiled}>
      <span className={css.radioGroupLegendText}>{legend}</span>
      {options.map((option) => (
        <label
          key={option}
          className={css.radioLabel}
          onMouseDown={handleMouseDown}
          onClick={handleClick}
        >
          {formatLabel(option)}
          <input
            type="radio"
            value={option}
            name={name}
            className={css.radioBox}
            defaultChecked={option === value}
          />
        </label>
      ))}
    </fieldset>
  );
};

export default RadioFilterGroup;
