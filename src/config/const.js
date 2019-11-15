export const wait = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export const TRACKS_JSON_STATIC = 'tracks.json';

export const FAKE_JSON_API = 'https://app.fakejson.com/q';

export const FAKE_JSON_TOKEN = '79k3Z1p34SBDDzpsBxW9RA';

export const payload = {
  token: FAKE_JSON_TOKEN,
  data: {
    id: "numberInt",
    name: "nameFirst",
    autor: "personTitle",
    image: "",
    track: {
      fileName: "fileName",
      fileExtension: "fileExtension",
      fileMIME: "fileMIME"
    },
    _repeat: 30
  }
};
