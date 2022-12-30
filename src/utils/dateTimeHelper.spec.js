import DateTimeHelper from './dateTimeHelper';

describe('DateTimeHelper', () => {
  const date = '2022-11-16T14:25:15.8411186Z';
  const timeZone = 'Asia/Qatar';

  beforeAll(() => {
    jest.useFakeTimers('modern');
    // jest.setSystemTime('Fri Dec 30 2022 11:37:12 GMT+0300 (Eastern European Standard Time)');
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('getDate', () => {
    const invalidDate = 'wrong' + date;
    expect(DateTimeHelper.getDate({ date: invalidDate })).toEqual(invalidDate);
    expect(DateTimeHelper.getDate({ date })).toEqual(date);
    expect(DateTimeHelper.getDate({ date, timeZone })).toEqual('16.11.2022');
    expect(DateTimeHelper.getDate({ date, timeZone, includeOffset: true })).toEqual('16.11.2022 (UTC+03:00)');
  });

  it.skip('getLocalDate', () => {
    // jest.useFakeTimers();
    // jest.setSystemTime(new Date('Fri Dec 30 2022 11:37:12 GMT+0300 (Eastern European Standard Time)'));

    jest.useFakeTimers();
    jest.setSystemTime(new Date(date));

    // TODO: adaptate locally and pipeline. Currently it passed in pipeline
    const invalidDate = 'wrong' + date;
    expect(DateTimeHelper.getLocalDate({ date: invalidDate })).toEqual(invalidDate);
    expect(DateTimeHelper.getLocalDate({})).toEqual(undefined);
    expect(DateTimeHelper.getLocalDate({ date })).toEqual('16.11.2022');
    expect(DateTimeHelper.getLocalDate({ date, includeOffset: true })).toEqual('16.11.2022 Z');
  });

  it('getTime', () => {
    const invalidDate = 'wrong' + date;
    expect(DateTimeHelper.getTime({ date: invalidDate })).toEqual(invalidDate);
    expect(DateTimeHelper.getTime({})).toEqual(undefined);
    expect(DateTimeHelper.getTime({ date })).toEqual(date);
    expect(DateTimeHelper.getTime({ date, timeZone })).toEqual('17:25');
    expect(DateTimeHelper.getTime({ date, timeZone, includeOffset: true })).toEqual('17:25 (UTC+03:00)');
    expect(DateTimeHelper.getTime({ date, includeSeconds: true })).toEqual(date);
    expect(DateTimeHelper.getTime({ date, timeZone, includeOffset: true, includeSeconds: true })).toEqual('17:25:15 (UTC+03:00)');
  });

  it.skip('getLocalTime', () => {
    // TODO: adaptate locally and pipeline. Currently it passed in pipeline

    jest.useFakeTimers();
    jest.setSystemTime(new Date(date));

    const invalidDate = 'wrong' + date;
    expect(DateTimeHelper.getLocalTime({ date: invalidDate })).toEqual(invalidDate);
    expect(DateTimeHelper.getLocalTime({})).toEqual(undefined);
    expect(DateTimeHelper.getLocalTime({ date })).toEqual('14:25');
    expect(DateTimeHelper.getLocalTime({ date, includeOffset: true })).toEqual('14:25 Z');
    expect(DateTimeHelper.getLocalTime({ date, includeOffset: true, includeSeconds: true })).toEqual('14:25:15 Z');
  });

  it('getDateTimeForTimezone', () => {
    const invalidDate = 'wrong' + date;
    expect(DateTimeHelper.getDateTimeForTimezone()).toEqual(undefined);
    expect(DateTimeHelper.getDateTimeForTimezone(date)).toEqual(undefined);
    expect(DateTimeHelper.getDateTimeForTimezone(invalidDate, timeZone)).toEqual(invalidDate);
    expect(DateTimeHelper.getDateTimeForTimezone(date, timeZone)).toEqual('16.11.2022 17:25 (UTC+03:00)');
  });

  it('getLocalDateTime', () => {
    // TODO: adaptate locally and pipeline. Currently it passed in pipeline
    // https://www.youtube.com/watch?v=G--iuQ6sVS8&ab_channel=DwinaTech
    jest.useFakeTimers();
    jest.setSystemTime(new Date(date));

    const invalidDate = 'wrong' + date;
    expect(DateTimeHelper.getLocalDateTime()).toEqual(undefined);
    expect(DateTimeHelper.getLocalDateTime(invalidDate)).toEqual(invalidDate);
    expect(DateTimeHelper.getLocalDateTime(invalidDate)).toEqual(invalidDate);
    expect(DateTimeHelper.getLocalDateTime(date)).toEqual('16.11.2022 14:25 (UTCZ)');
    expect(DateTimeHelper.getLocalDateTime(date, true)).toEqual('16.11.2022 14:25 (UTCZ)');
    expect(DateTimeHelper.getLocalDateTime(date, false)).toEqual('16.11.2022 14:25');
  });
});
