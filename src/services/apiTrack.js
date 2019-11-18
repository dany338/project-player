import { FAKE_JSON_API as URL_API, payload, TRACKS_JSON_STATIC } from '../config/const';
/* Defined Endpoints */
import endpoints from '../config/endpoints';

let apiHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: '',
};

const fetchParams = (method, data = '') => {
  const body = data ? { body: JSON.stringify(data) } : {};

  return {
    method,
    headers: apiHeaders,
    credentials: 'same-origin',
    ...body,
  };
};

export const apiTrack = {
  getTracks: async () => {
    try { // TRACKS_JSON_STATIC ${URL_API}${endpoints.cover.getTracks}
      const response = await fetch(`${TRACKS_JSON_STATIC}`, fetchParams('POST', { ...payload}));
      // if (typeof response.ok === 'undefined') {
      //   // throw new Error(response.status_message);
      //   console.log(response.status_message);
      // }
      const data = await response.json();
      if (typeof data.error !== 'undefined') {
        // throw new Error(data.error);
        console.log(data.error);
      }
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
};

export default apiTrack;
