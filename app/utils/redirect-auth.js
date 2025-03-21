import { AUTH_URL } from '../constants/signup';

export default function () {
  let authUrl = AUTH_URL;
  if (typeof window !== 'undefined') {
    authUrl = `${authUrl}&state=${window.location.href}`;
  }
  window.open(authUrl, '_self');
}
