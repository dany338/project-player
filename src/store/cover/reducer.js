import {
  COVER_LIST_INIT,
  COVER_LIST_SUCCESS,
  COVER_LIST_ERROR
} from './types';

const initialState = {
  data: [],
	isLoading: false,
  error: '',
  trackSelected: {},
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
			};
    }

		case COVER_LIST_ERROR: {
			return {
				...state,
				isLoading: false,
				error: payload,
      };
    }

    default: {
			return state;
		}
  }
};

export { cover as default, initialState };
