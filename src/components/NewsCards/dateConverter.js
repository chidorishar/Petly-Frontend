import { format } from 'date-fns';

export function dateConverter(utcDate) {
  const date = format(new Date(utcDate), 'dd/MM/yyyy');
  return date;
}

export default dateConverter;
