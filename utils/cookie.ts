export const ACCESS_TOKEN = 'access_token';
export const REFRESH_TOKEN = 'refresh_token';

export function setCookie(name: string, value: string, maxAge = 24 * 60 * 60): void {
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
