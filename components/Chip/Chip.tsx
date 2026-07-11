import css from './Chip.module.css';

interface ChipProps {
  children: React.ReactNode;
}

const Chip = ({ children }: ChipProps) => {
  return <span className={css.chip}>{children}</span>;
};

export default Chip;
