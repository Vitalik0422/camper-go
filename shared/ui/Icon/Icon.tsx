import Gas from './icons/gasStation.svg';
import Transmission from './icons/transmission.svg';
import Car from './icons/car.svg';

const ICON_OBJECT = {
  gas: Gas,
  transmission: Transmission,
  car: Car,
};

export type IconsName = keyof typeof ICON_OBJECT;

interface IconProps {
  name: IconsName;
  width?: number;
  height?: number;
}

const Icon = ({ name, width = 24, height = 24 }: IconProps) => {
  const Icon = ICON_OBJECT[name];
  return <Icon width={width} height={height} />;
};

export default Icon;
