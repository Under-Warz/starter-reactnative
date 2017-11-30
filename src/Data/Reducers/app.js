// import vendors
import { REHYDRATE } from 'redux-persist/constants';

// Initial state
const initialState = {
	rehydrated: false,
	isLoading: false
};

// Reducer
export default function reducer(state = initialState, action = {}) {
	let newState = Object.assign({}, state);

	switch (action.type) {
		case REHYDRATE:
			newState.rehydrated = true;
      return newState;

    // Show loader
    /*case USER_LOGIN_REQUESTED:
    	newState.isLoading = true;
    	return newState;*/
	}

	newState.isLoading = false;
  return newState;
};