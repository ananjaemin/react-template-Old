import axios from 'axios';

const config = {
  baseURL: ``, // env
  header: {},
};

export const API = axios.create(config);

/*[fileName]
├─ api.ts
└─ type.ts */
