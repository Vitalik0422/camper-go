import css from './NavigationList.module.css';

interface NavigationListProps {
  children: React.ReactNode;
}

const NavigationList = ({ children }: NavigationListProps) => {
  return <ul className={css.navigationList}>{children}</ul>;
};

export default NavigationList;
