import css from './NavigationList.module.css';

interface NavigationItem {
  children: React.ReactNode;
}

const NavigationItem = ({ children }: NavigationItem) => {
  return <ul className={css.navigationList}>{children}</ul>;
};

export default NavigationItem;
