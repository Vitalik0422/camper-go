export const formatLabel = (string: string) => {
  const withoutUnderscore = string.replace(/_/g, ' ');
  return withoutUnderscore.charAt(0).toUpperCase() + withoutUnderscore.slice(1);
};
