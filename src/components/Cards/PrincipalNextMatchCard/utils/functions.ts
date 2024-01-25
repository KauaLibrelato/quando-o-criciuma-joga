import {differenceInSeconds} from 'date-fns';

function formatTimeUnit(unit: number) {
  return unit < 10 ? `0${unit}` : unit;
}

export function calculateTimeRemaining(targetDate: Date) {
  const now = new Date();
  const difference = differenceInSeconds(targetDate, now);

  const days = formatTimeUnit(Math.floor(difference / (24 * 60 * 60)));
  const hours = formatTimeUnit(
    Math.floor((difference % (24 * 60 * 60)) / 3600),
  );
  const minutes = formatTimeUnit(Math.floor((difference % 3600) / 60));
  const seconds = formatTimeUnit(difference % 60);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

export function compareDate(specificDate: Date): string | undefined {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const specificDateFormatted = new Date(specificDate);
  specificDateFormatted.setHours(0, 0, 0, 0);

  const differenceInMilliseconds =
    specificDateFormatted.getTime() - hoje.getTime();
  const differenceEmDias = differenceInMilliseconds / (1000 * 60 * 60 * 24);

  if (differenceEmDias === 0) {
    return 'Hoje';
  } else if (differenceEmDias === 1) {
    return 'Amanhã';
  }
}
