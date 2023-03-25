// function dateConverter(val) {
//   const myArray = val.split('-');

//   let year = myArray[0];
//   let month = myArray[1];
//   let day = myArray[2];

//   let formatteddate = day + '.' + month + '.' + year;
//   return formatteddate;
// }
// export default dateConverter;

import { format } from 'date-fns';

export function dateConverter(utcDate) {
  const date = format(new Date(utcDate), 'dd/MM/yyyy');
  return date;
}

export default dateConverter;
