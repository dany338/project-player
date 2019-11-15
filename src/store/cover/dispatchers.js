import {
  listCover,
  listSuccess,
  listFailed
} from './actions';

import * as TrackServices from "../../services";

export const getUsersRequest = () => {
	return async (dispatch) => {
		dispatch(listCover());
		try {
      const data = await TrackServices.apiTrack.getTracks();
      console.log('getUsersRequest data', data);
			dispatch(listSuccess(data.docs));
		} catch (error) {
			dispatch(listFailed(error));
		}
	};
};
