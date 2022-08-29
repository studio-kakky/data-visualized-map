import { AppDateTime } from './AppDateTime';

describe('AppDateTime', () => {
  describe('fromIso', () => {
    const paramsList = [
      { source: '2021-10-02T10:00:00+0900', unixTime: 1633136400000 },
      { source: '2021-10-02T10:20:00+0700', unixTime: 1633144800000 },
      { source: '2021-10-02T10:20:00Z', unixTime: 1633170000000 },
    ];

    paramsList.forEach((params) => {
      test(`${params.source}をAppDateTimeに変換するとvalueが${params.unixTime}となる`, () => {
        const dateTime = AppDateTime.fromIso(params.source);
        expect(dateTime.valuOf()).toBe(params.unixTime);
      });
    });
  });

  describe('addHour', () => {
    test('適切に時間が追加される', () => {
      const dateTime = AppDateTime.fromIso('2021-10-02T10:00:00+0900');
      const added = dateTime.addHours(5);
      const expected = AppDateTime.fromIso('2021-10-02T15:00:00+0900');

      expect(added.valuOf()).toEqual(expected.valuOf());
    });

    test('負の時間の計算も適切に行われる', () => {
      const dateTime = AppDateTime.fromIso('2021-10-02T10:00:00+0900');
      const added = dateTime.addHours(-5);
      const expected = AppDateTime.fromIso('2021-10-02T05:00:00+0900');

      expect(added.valuOf()).toEqual(expected.valuOf());
    });
  });

  describe('addMinutes', () => {
    test('適切に時間が追加される', () => {
      const dateTime = AppDateTime.fromIso('2021-10-02T10:00:00+0900');
      const added = dateTime.addMinutes(12);
      const expected = AppDateTime.fromIso('2021-10-02T10:12:00+0900');

      expect(added.valuOf()).toEqual(expected.valuOf());
    });

    test('負の時間の計算も適切に行われる', () => {
      const dateTime = AppDateTime.fromIso('2021-10-02T10:00:00+0900');
      const added = dateTime.addMinutes(-35);
      const expected = AppDateTime.fromIso('2021-10-02T09:25:00+0900');

      expect(added.valuOf()).toEqual(expected.valuOf());
    });
  });

  describe('floorTenMinutes', () => {
    test('適切に分が10分単に丸められる', () => {
      const dateTime = AppDateTime.fromIso('2021-10-02T10:13:12+0900');
      const result = dateTime.floor10Minutes();
      const expected = AppDateTime.fromIso('2021-10-02T10:10:00+0900');

      expect(result.valuOf()).toEqual(expected.valuOf());
    });
  });

  describe('beginOfHour', () => {
    test('適切にその時間の始まりを返す', () => {
      const dateTime = AppDateTime.fromIso('2021-10-02T10:13:12+0900');
      const result = dateTime.beginOfHour();
      const expected = AppDateTime.fromIso('2021-10-02T10:00:00+0900');

      expect(result.valuOf()).toEqual(expected.valuOf());
    });
  });
});
