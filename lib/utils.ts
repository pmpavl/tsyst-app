import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const ACCESS_TOKEN = 'ACCESS_TOKEN';
export const ACCESS_TOKEN_MAX_AGE = 86400; // 1 day
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const REFRESH_TOKEN_MAX_AGE = 31536000; // 1 year

export function cn(...inputs: ClassValue[]): string { return twMerge(clsx(inputs)); }
export function capitalize(str: string): string {
  str = str.toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getHoursFromMilliseconds(ms: number): number { return Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); }
export function getMinutesFromMilliseconds(ms: number): number { return Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60)); }
export function getSecondsFromMilliseconds(ms: number): number { return Math.floor((ms % (1000 * 60)) / 1000); }

export function convertSecondsToMilliseconds(s: number): number { return s * 1000; }
export function convertSecondsToNanoseconds(s: number): number { return s * 1000000000; }

export function convertMillisecondsToSeconds(ms: number): number { return Math.floor(ms / 1000); }
export function convertMillisecondsToNanoseconds(ms: number): number { return ms * 1000000; }

export function setCookie(name: string, value: string, maxAge: number = 24 * 60 * 60): void {
  document.cookie = `${name}=${value}; max-age=${maxAge}; path=/`;
}

export function getCookie(name: string): string {
  const parts = `; ${document.cookie}`.split(`; ${name}=`);

  if (parts.length == 2 && parts[1] !== undefined) {
    return parts[1].split(';').shift() || '';
  }

  return '';
}

export function deleteCookie(name: string): void {
  document.cookie = `${name}=; max-age=0; path=/`;
}
