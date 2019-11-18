import {
  COVER_LIST_INIT,
  COVER_LIST_SUCCESS,
  COVER_LIST_ERROR,
  COVER_ACTIVE_PLAY,
  COVER_SELECTED_TRACK,
  COVER_ACTIVE_AUDIO
} from './types';

export const listCover = () => {
	return {
		type: COVER_LIST_INIT
	};
};

export const listSuccess = data => {
	return {
		type: COVER_LIST_SUCCESS,
		payload: { data }
	};
};

export const listFailed = error => {
	return {
		type: COVER_LIST_ERROR,
		payload: error
	};
};

export const activePlay = () => {
	return {
		type: COVER_ACTIVE_PLAY
	};
};

export const selectedTrack = position => {
	return {
    type: COVER_SELECTED_TRACK,
    payload: position
	};
};

export const activeAudio = audio => {
	return {
    type: COVER_ACTIVE_AUDIO,
    payload: { audio }
	};
};
