import { createContext } from 'react';
import produce from 'immer';
/** import alias */
import { SYSTEM } from '~/services/store/constants';
/** ------------ */

interface SystemProps {
  error: { title: string; message: string };
  hasError: boolean;
  loading: boolean;
}

export const INITIAL_STATE = {
  error: { title: '', message: '' },
  hasError: false,
  loading: false,
};

export const SystemContext = createContext({
  getSystemData: (): void => {},
  setSystemData: (data: any): void => {},
  updateSystemData: (data: any): void => {},
});

const systemReducer = (state = INITIAL_STATE, action: { type: string; data?: any }): SystemProps => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SYSTEM.GET_DATA:
        draft.loading = true;
        break;

      case SYSTEM.SET_DATA:
        draft.hasError = action.data.hasError;
        draft.error = action.data.error;
        draft.loading = false;
        break;

      case SYSTEM.UPDATE_DATA:
        draft = { ...state, ...action.data };
        draft.loading = false;
        break;

      default:
        break;
    }
  });
};

export default systemReducer;
