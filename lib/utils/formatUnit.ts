export const formatUnit = (string: string): string => {
  return string.replace(/(\d)([a-zA-Zа-яА-ЯіІїЇєЄ]+)$/, '$1 $2');
};
