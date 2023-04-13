import { api } from '..';

export function getToken(data) {
  return api.post('/authorization/token?grant_type=password', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}
