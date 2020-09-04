import { createContext } from 'react';
import produce from 'immer';
/** import alias */
import { USER } from '~/services/store/constants';
/** ------------ */

export const INITIAL_STATE = {
  data: [],
  loading: false,
};

export const UserContext = createContext({
  getUserData: (): void => {},
  setUserData: (data: any): void => {},
  updateUserData: (data: any): void => {},
});

const userReducer = (
  state = INITIAL_STATE,
  action: { type: string; data?: any }
): { data: never[]; loading: boolean } => {
  return produce(state, (draft) => {
    switch (action.type) {
      case USER.GET_DATA:
        draft.loading = true;
        break;

      case USER.SET_DATA:
        draft.data = action.data;
        draft.loading = false;
        break;

      case USER.UPDATE_DATA:
        draft.data = { ...state.data, ...action.data };
        draft.loading = false;
        break;

      default:
        break;
    }
  });
};

export default userReducer;
