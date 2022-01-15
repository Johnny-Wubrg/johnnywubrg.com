export const formatDate = (dateTimeString: string) => {
  const date = new Date(dateTimeString);
  return date.toLocaleDateString();
}