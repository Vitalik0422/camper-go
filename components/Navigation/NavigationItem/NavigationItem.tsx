import Link from 'next/link';
import css from './NavigationItem.module.css';
import clsx from 'clsx';

interface NavigationItemProps {
  label: string;
  href: string;
  variant: boolean;
}

const NavigationItem = ({ label, href, variant }: NavigationItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className={clsx(css.navigationItemLink, variant && css.active)}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavigationItem;
