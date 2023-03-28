import { format } from 'date-fns';

export function dateConverter(utcDate, formatString) {
  const date = format(new Date(utcDate), formatString);
  return date;
}

export default dateConverter;
