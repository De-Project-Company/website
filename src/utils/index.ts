import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// "nav-text-active": "#FD9137"

/**
 * Shrink a string to a specified length(len).
 * @function shrinkString
 * @param {string} str
 * @param {number} len
 * @returns {string}
 */
export const shrinkString = ({
  str,
  len
}: {
  str?: string;
  len: number;
}): string => {
  if (!str) return '';
  if (str.length > len) {
    return str.substring(0, len) + '...';
  }
  return str;
};

export function reformatDate(dateStr: string) {
  const parts = dateStr.split('-').map(part => parseInt(part, 10));
  const date = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC'
  };

  return date.toLocaleDateString('en-US', options);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export function calculateReadingTime(mdxContent: any) {
//   const wordsPerMinute = 200;
//   const text = mdxContent.replace(/<\/?[^>]+(>|$)/g, '');
//   const wordCount = text
//     .split(/\s+/)
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     .filter((word: any) => word.length > 0).length;
//   const readingTime = Math.ceil(wordCount / wordsPerMinute);

//   return readingTime;
// }

/**
 * Returns an Encrypted a string .
 * @function encryptString - Encodes or encrypts a string using a base64 Buffer
 * @returns A encoded string .
 */
export const encryptString = (str?: string): string => {
  if (!str) return '';
  const buffer = Buffer.from(str);
  return buffer.toString('base64');
};

/**
 * Decodes and Returns a string .
 * @function decryptString - Decodes or decrypts an encrypted string Buffer
 * @returns A decoded string .
 */

export const decryptString = (str?: string): string => {
  if (!str) return '';
  const buffer = Buffer.from(str, 'base64');
  return buffer.toString();
};
