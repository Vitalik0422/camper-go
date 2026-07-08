import css from './SearchLocationForm.module.css';

interface SearchLocationFormProps {
  label: string;
}

const SearchLocationForm = ({ label }: SearchLocationFormProps) => {
  return (
    <label className={css.locationInputLabel}>
      <span className={css.labelText}>{label}</span>
      <input type="text" className={css.locationInput} placeholder="City" />
    </label>
  );
};

export default SearchLocationForm;
