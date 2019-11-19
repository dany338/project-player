import {
  COVER_LIST_INIT,
  COVER_LIST_SUCCESS,
  COVER_LIST_ERROR,
  COVER_ACTIVE_PLAY,
  COVER_SELECTED_TRACK,
  COVER_ACTIVE_AUDIO
} from './types';

const initialState = {
  data: [],
	isLoading: false,
  error: '',
  positionTrack: 0,
  trackSelected: {},
  isPlay: false,
  audio: new Audio,
};

const cover = (state = initialState, { type, payload }) => {
  switch (type) {
    case COVER_LIST_INIT: {
			return {
				...state,
				error: '',
				isLoading: true,
      };
    }

		case COVER_LIST_SUCCESS: {
			return {
				...state,
				data: payload.data,
        isLoading: false,
        trackSelected: payload.data[0]
			};
    }

		case COVER_LIST_ERROR: {
			return {
				...state,
				isLoading: false,
				error: payload,
      };
    }

    case COVER_ACTIVE_PLAY: {
			return {
				...state,
				isPlay: !state.isPlay,
      };
    }

    case COVER_SELECTED_TRACK: {
			return {
				...state,
        positionTrack: payload,
        trackSelected: state.data[payload],
        isPlay: true,
      };
    }

    case COVER_ACTIVE_AUDIO: {
			return {
				...state,
        audio: payload.audio,
      };
    }

    default: {
			return state;
		}
  }
};

export { cover as default, initialState };
