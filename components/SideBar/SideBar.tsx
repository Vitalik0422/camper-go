import Button from '../UI/Button/Button';
import RadioFilterGroup from './RadioFilterGroup/RadioFilterGroup';
import css from './SideBar.module.css';

const CAMPER_FORM_OPTIONS = [
  { label: 'Alcove', value: 'alcove' },
  { label: 'Panel Van', value: 'panel_van' },
  { label: 'Integrated', value: 'integrated' },
  { label: 'Semi Integrated', value: 'semi_integrated' },
];

const ENGINE_OPTIONS = [
  { label: 'Diesel', value: 'diesel' },
  { label: 'Petrol', value: 'petrol' },
  { label: 'Hybrid', value: 'hybrid' },
  { label: 'Electric', value: 'electric' },
];

const TRANSMISSION_OPTIONS = [
  { label: 'Automatic', value: 'automatic' },
  { label: 'Manual', value: 'manual' },
];

const SideBar = () => {
  return (
    <aside className={css.sideBar}>
      <form action="">
        <label htmlFor="">
          Location
          <input type="text" />
        </label>
        <RadioFilterGroup legend="Camper form" options={CAMPER_FORM_OPTIONS} />
        <RadioFilterGroup legend="Engine" options={ENGINE_OPTIONS} />
        <RadioFilterGroup
          legend="Transmission"
          options={TRANSMISSION_OPTIONS}
        />

        <Button width={312} height={56}>
          Search
        </Button>
        <Button width={312} height={56} primary={true}>
          Clear filters
        </Button>
      </form>
    </aside>
  );
};

export default SideBar;
