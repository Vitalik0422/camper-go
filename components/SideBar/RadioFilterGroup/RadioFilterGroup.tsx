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
  return (
    <fieldset className={css.radioFiled}>
      <span className={css.radioGroupLegendText}>{legend}</span>
      {options.map((option) => (
        <label key={option} className={css.radioLabel}>
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
