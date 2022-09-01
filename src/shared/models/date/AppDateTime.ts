import { DateTime } from 'luxon';

export class AppDateTime {
  static now(): AppDateTime {
    return new AppDateTime(DateTime.now().toMillis());
  }

  static fromIso(isoString: string): AppDateTime {
    return new AppDateTime(DateTime.fromISO(isoString).toMillis());
  }

  constructor(private value: number) {
    // noop
  }

  valuOf(): number {
    return this.value;
  }

  toFormat(formatString: string): string {
    return this.toLuxon().toFormat(formatString);
  }

  addHours(hours: number): AppDateTime {
    const value = this.value + hours * 60 * 60 * 1000;
    return new AppDateTime(value);
  }

  addMinutes(minutes: number): AppDateTime {
    const value = this.value + minutes * 60 * 1000;
    return new AppDateTime(value);
  }

  floor10Minutes(): AppDateTime {
    const remainder = this.value % (10 * 60 * 1000);
    return new AppDateTime(this.value - remainder);
  }

  beginOfHour(): AppDateTime {
    const remainder = this.value % (60 * 60 * 1000);
    return new AppDateTime(this.value - remainder);
  }

  private toLuxon(): DateTime {
    return DateTime.fromMillis(this.value);
  }
}
