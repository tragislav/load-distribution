import { loadApi } from '..';

export function getWorkload(token) {
  return loadApi.post('/workload', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
}
