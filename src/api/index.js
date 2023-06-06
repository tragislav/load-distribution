import axios from 'axios';

export const authApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_AUTH_API,
  headers: {
    Authorization:
      'Basic VlNUVV9FTEVDVFJPTklDSk9VUk5BTF9DTElFTlQ6VlNUVV9FTEVDVFJPTklDSk9VUk5BTF9DTElFTlQ=',
    'Content-Type': 'application/json',
  },
});

export const loadApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_LOAD_API,
  headers: {
    Authorization:
      'Basic VlNUVV9FTEVDVFJPTklDSk9VUk5BTF9DTElFTlQ6VlNUVV9FTEVDVFJPTklDSk9VUk5BTF9DTElFTlQ=',
    'Content-Type': 'application/json',
  },
});

authApi.interceptors.response.use((response) => response.data);
loadApi.interceptors.response.use((response) => response.data);
