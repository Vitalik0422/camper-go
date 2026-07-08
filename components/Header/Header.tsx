import Navigation from '@/components/Navigation/Navigation';
import css from './Header.module.css';
import Logo from '@/shared/ui/Logo/Logo';
import clsx from 'clsx';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="">
      <div className={clsx('container', css.headerContainer)}>
        <Link href="./" className={css.headerLogo}>
          <Logo />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
