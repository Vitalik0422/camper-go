export const formatLabel = (string: string) => {
  const withoutUnderscore = string.replace(/_/g, ' ');
  if (string.length <= 2) return withoutUnderscore.toLocaleUpperCase();
  return withoutUnderscore.charAt(0).toUpperCase() + withoutUnderscore.slice(1);
};
