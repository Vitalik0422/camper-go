import Image from 'next/image';
import css from './StateMessage.module.css';

interface StateMessageProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const StateMessage = ({ title, description, children }: StateMessageProps) => {
  return (
    <div className={css.wrapper}>
      <Image
        src="/not-found.png"
        alt={'No campers found image'}
        width={488}
        height={463}
      />
      <div className={css.textWrapper}>
        <h2 className={css.title}>{title}</h2>
        <p className={css.description}>{description}</p>
      </div>
      <div className={css.buttonWrapper}>{children}</div>
    </div>
  );
};

export default StateMessage;
