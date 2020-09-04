import { useReducer } from 'react';
/** import alias */
import { USER } from '~/services/store/constants';
// ------------
/** import reducers */
import { userReducer, USER_STATE } from '~/services/store/reducers';
// ------------

export default function UserAction(): object {
  const [userState, userDispatch] = useReducer(userReducer, USER_STATE);

  const getUserData = (): void => {
    userDispatch({
      type: USER.GET_DATA,
    });
  };

  const setUserData = (data: any): void => {
    userDispatch({
      type: USER.SET_DATA,
      data,
    });
  };

  const updateUserData = (data: any): void => {
    userDispatch({
      type: USER.UPDATE_DATA,
      data,
    });
  };

  return { userState, getUserData, setUserData, updateUserData };
}
