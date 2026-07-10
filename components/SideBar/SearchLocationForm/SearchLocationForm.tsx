import Icon from '@/shared/ui/Icon/Icon';
import css from './SearchLocationForm.module.css';

interface SearchLocationFormProps {
  label: string;
}

const SearchLocationForm = ({ label }: SearchLocationFormProps) => {
  return (
    <label className={css.locationInputLabel}>
      <span className={css.labelText}>{label}</span>
      <div className={css.inputWrapper}>
        <span className={css.iconWrapper}>
          <Icon name="map" width={20} height={20} />
        </span>
        <input
          type="text"
          className={css.locationInput}
          placeholder="City"
          name="location"
        />
      </div>
    </label>
  );
};

export default SearchLocationForm;
