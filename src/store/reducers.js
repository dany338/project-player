import coverReducer from './cover';
import { logger } from './middlewares';

export const initialState = {
	cover: coverReducer.initialState,
};

export default function mainReducer(state, action) {
	// Receiving previous state here
	const { cover } = state;

	// Receiving current state here
	const currentState = {
    cover: coverReducer.reducer(cover, action),
	};

	// Middlewares
	logger(action, state, currentState);

	return currentState;
};
