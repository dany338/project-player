import {
  COVER_LIST_INIT,
  COVER_LIST_SUCCESS,
  COVER_LIST_ERROR
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
