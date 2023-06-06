import { authApi } from '..';

export function getToken(data) {
  return authApi.post('/authorization/token?grant_type=password', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}
