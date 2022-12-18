export const getDate = (timestamp?: string | number | Date) => {
  const date = timestamp ? new Date(timestamp) : new Date();

  const hours = date.getHours();
  const day = date.getDate();
  const weekday = date.toLocaleString('en-us', { weekday: 'long' });
  const month = date
    .toLocaleString('en-us', { month: 'short' });

  return {
    day, month, weekday, hours,
  };
};
