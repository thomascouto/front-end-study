import { format } from "date-fns";

export const dateFormatter = (date: number, dateFormat: DateFormat): string => {
  return format(date, dateFormat);
};
