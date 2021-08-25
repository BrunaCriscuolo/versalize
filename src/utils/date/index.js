import {
  format,
  subDays
} from 'date-fns';

export const formatDate = (value, mask = 'dd/MM/yyyy') => format(value, mask);

export const disabledBirthDay = current => current > subDays(new Date(), 365 * 3);


