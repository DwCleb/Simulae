import { useReducer } from 'react';
/** import alias */
import { SYSTEM } from '~/services/store/constants';
// ------------
/** import reducers */
import { systemReducer, SYSTEM_STATE } from '~/services/store/reducers';
// ------------

export default function SystemAction(): object {
  const [systemState, systemDispatch] = useReducer(systemReducer, SYSTEM_STATE);

  const getSystemData = (): void => {
    systemDispatch({
      type: SYSTEM.GET_DATA,
    });
  };

  const setSystemData = (data: any): void => {
    systemDispatch({
      type: SYSTEM.SET_DATA,
      data,
    });
  };

  const updateSystemData = (data: any): void => {
    systemDispatch({
      type: SYSTEM.UPDATE_DATA,
      data,
    });
  };

  return { systemState, getSystemData, setSystemData, updateSystemData };
}
