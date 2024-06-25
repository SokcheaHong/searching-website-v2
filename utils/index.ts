type DebounceFnc = (...args: any[]) => void;

export const buildQuery = (obj: Record<string, any>) => {
  return Object.keys(obj).reduce((acc, key) => {
    if ((obj as any)[key]) acc += `${key}=${(obj as any)[key]}&`;
    return acc;
  }, '');
};

export const debounce = (cb: DebounceFnc, delay: number = 350): DebounceFnc => {
  const timeoutRef = ref<NodeJS.Timeout | null>(null);

  return (...args: any[]) => {
    if (timeoutRef.value) clearTimeout(timeoutRef.value);
    timeoutRef.value = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

export const delay = (ms = 500) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const uniqueArray = (arr: Record<string, unknown>[], key: any) => {
  const map = new Map();
  arr.forEach((item) => map.set(item[key], item));
  return Array.from(map.values());
};

export const filterObjectWithTruthyValues = <T extends object>(
  obj: T
): Partial<T> => {
  return Object.keys(obj).reduce((acc, key) => {
    if (obj[key as keyof T]) {
      acc[key as keyof T] = obj[key as keyof T];
    }
    return acc;
  }, {} as Partial<T>);
};

export const arabicToKhmer = (number: number | string): string => {
  const khmerNumerals = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];

  // Convert the input number to a string
  const arabicString = String(number);

  // Convert each character to the corresponding Khmer numeral if it's a digit
  const khmerString = arabicString
    .split('')
    .map((char) => {
      const digit = char.charCodeAt(0) - '0'.charCodeAt(0);
      // Check if the character is a digit and convert it, otherwise return the character as is
      return digit >= 0 && digit <= 9 ? khmerNumerals[digit] : char;
    })
    .join('');

  return khmerString;
};

export const formatDateToKhmer = (
  date: Date | number | string,
  type: any = false
): string => {
  // If date is a number or string, assume it's a UNIX timestamp
  const timestamp: any = date;
  let currentDate =
    timestamp && type == false ? new Date(timestamp * 1000) : (date as Date);

  const locale = {
    month: [
      'មករា',
      'កុម្ភៈ',
      'មីនា',
      'មេសា',
      'ឧសភា',
      'មិថុនា',
      'កក្កដា',
      'សីហា',
      'កញ្ញា',
      'តុលា',
      'វិច្ឆិកា',
      'ធ្នូ',
    ],
    numbers: ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'],
  };

  const day: any = currentDate.getDate().toString().padStart(2, '0');
  const month: any = locale.month[currentDate.getMonth()];
  const year: any = currentDate.getFullYear().toString();
  let khmerYear = '';
  for (let i = 0; i < year.length; i++) {
    khmerYear += locale.numbers[parseInt(year[i])];
  }
  // Convert numbers to Khmer numerals
  let khmerDay = '';
  for (let i = 0; i < day.length; i++) {
    khmerDay += locale.numbers[parseInt(day[i])];
  }

  return `${khmerDay}-${month}-${khmerYear}`;
};
