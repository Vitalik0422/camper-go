'use client';
import NavigationList from './NavigationList/NavigationList';
import NavigationItem from './NavigationItem/NavigationItem';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/catalog', label: 'Catalog' },
  ];

  const pathname = usePathname();
  return (
    <nav>
      <NavigationList>
        {links.map((link) => (
          <NavigationItem
            label={link.label}
            href={link.href}
            key={link.label}
            variant={pathname === link.href}
          />
        ))}
      </NavigationList>
    </nav>
  );
};

export default Navigation;
