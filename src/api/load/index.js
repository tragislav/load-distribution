import { loadApi } from '..';

export function getWorkload(token) {
  return loadApi.get('/workload', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
}

export function changeWorkload(row, token) {
  return loadApi.put('/workload', row, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
}

export function splitWorkload(array, token) {
  return loadApi.put('/workload/multiple', array, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
}
