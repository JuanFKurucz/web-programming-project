// eslint-disable-next-line import/prefer-default-export
export const parseDate = (date, time = false) => {
  const day = String(date.getDay()).padStart(2, '0');
  const month = String(date.getMonth()).padStart(2, '0');
  const year = String(date.getFullYear()).padStart(4, '0');

  let output = `${day}/${month}/${year}`;
  if (time) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    output += ` ${hours}:${minutes}:${seconds}`;
  }
  return output;
};
