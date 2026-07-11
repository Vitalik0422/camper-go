export const formatLocation = (str: string): string => {
  return str.split(',').reverse().join(', ');
};
