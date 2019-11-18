import {
  listCover,
  listSuccess,
  listFailed,
  activePlay,
  selectedTrack,
  activeAudio
} from './actions';

import * as TrackServices from "../../services";

export const getCoverRequest = () => {
	return async (dispatch) => {
		dispatch(listCover());
		try {
      const data = await TrackServices.apiTrack.getTracks();
      console.log('getCoverRequest data', data);
			dispatch(listSuccess(data));
		} catch (error) {
			dispatch(listFailed(error));
		}
	};
};

export const coverPlay = () => {
  return (dispatch) => {
    try {
      dispatch(activePlay());
    } catch (error) {
			console.log(error);
		}
  };
};

export const coverAntTrack = position => {
  return (dispatch) => {
    try {
      dispatch(selectedTrack(position));
    } catch (error) {
			console.log(error);
		}
  };
};

export const coverNextTrack = position => {
  return (dispatch) => {
    try {
      dispatch(selectedTrack(position));
    } catch (error) {
			console.log(error);
		}
  };
};

export const coverAudio = audio => {
  return (dispatch) => {
    try {
      dispatch(activeAudio(audio));
    } catch (error) {
			console.log(error);
		}
  };
};
