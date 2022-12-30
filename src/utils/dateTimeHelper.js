import { format, utcToZonedTime, toDate } from 'date-fns-tz';

class DateTimeHelper {
  static getDate({ date, timeZone, includeOffset = false }) {
    const parsedDate = toDate(date);
    if (parsedDate == 'Invalid Date' || !timeZone) {
      return date;
    }

    const timeZoneDate = utcToZonedTime(parsedDate, timeZone);
    if (includeOffset) {
      const tz = format(timeZoneDate, 'XXX', { timeZone: timeZone });
      const date = format(timeZoneDate, 'dd.MM.yyyy', { timeZone: timeZone });
      return `${date} (UTC${tz})`;
    }
    return format(timeZoneDate, 'dd.MM.yyyy', { timeZone: timeZone });
  }

  static getLocalDate({ date, includeOffset = false }) {
    const template = includeOffset ? 'dd.MM.yyyy XXX' : 'dd.MM.yyyy';
    if (!date) {
      return undefined;
    }

    const parsedDate = new Date(date);
    if (parsedDate == 'Invalid Date') {
      return date;
    }
    console.log('>>>>>>>>>>>>getLocalDate', parsedDate, format(parsedDate, template));
    return format(parsedDate, template);
  }

  static getTime({ date, timeZone, includeOffset = false, includeSeconds = false }) {
    const parsedDate = toDate(date);
    if (parsedDate == 'Invalid Date' || !timeZone) {
      return date;
    }

    const timeZoneDate = utcToZonedTime(parsedDate, timeZone);
    const template = includeSeconds ? 'HH:mm:ss' : 'HH:mm';

    if (includeOffset) {
      const tz = format(timeZoneDate, 'XXX', { timeZone: timeZone });
      const time = format(timeZoneDate, template, { timeZone: timeZone });
      return `${time} (UTC${tz})`;
    }
    return format(timeZoneDate, template, { timeZone: timeZone });
  }

  static getLocalTime({ date, includeOffset = false, includeSeconds = false }) {
    const template = includeOffset ? (includeSeconds ? 'HH:mm:ss XXX' : 'HH:mm XXX') : includeSeconds ? 'HH:mm:ss' : 'HH:mm';

    if (!date) {
      return undefined;
    }

    const parsedDate = new Date(date);
    if (parsedDate == 'Invalid Date') {
      return date;
    }

    return format(parsedDate, template);
  }

  static getDateTimeForTimezone(date, timeZone) {
    if (!date || !timeZone) {
      return undefined;
    }

    const parsedDate = toDate(date);
    if (parsedDate == 'Invalid Date') {
      return date;
    }

    const timeZoneDate = utcToZonedTime(parsedDate, timeZone);
    const dateTime = format(timeZoneDate, 'dd.MM.yyyy HH:mm', { timeZone: timeZone });
    const utcOffset = format(timeZoneDate, 'XXX', { timeZone: timeZone });
    return `${dateTime} (UTC${utcOffset})`;
  }

  static getLocalDateTime(date, includeOffset = true) {
    if (!date) {
      return undefined;
    }

    const dateFormatted = new Date(date);
    if (dateFormatted == 'Invalid Date') {
      return date;
    }

    if (includeOffset) {
      const dateTime = format(dateFormatted, 'dd.MM.yyyy HH:mm');
      const utcOffset = format(dateFormatted, 'XXX');
      return `${dateTime} (UTC${utcOffset})`;
    }

    return format(dateFormatted, 'dd.MM.yyyy HH:mm');
  }
}

export default DateTimeHelper;
