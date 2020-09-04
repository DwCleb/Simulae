import { useContext } from 'react';

import { UserContext, SystemContext } from '~/services/store/reducers';
import { API, URL } from '~/services/http';
import { getErrorMessages } from '~/utils/FormHelpers';

interface UserReturn {
  updateUser(email: string, password: string): Promise<void | boolean>;
}

export function User(): UserReturn {
  const { getUserData, updateUserData } = useContext(UserContext);
  const { setSystemData } = useContext(SystemContext);

  getUserData();

  const updateUser = async (data): Promise<void | boolean> => {
    try {
      const response = await API.put(URL.USER, data);

      const { status } = response;

      if (status === 200) {
        updateUserData(response.data);

        const systemData = { hasError: true, error: { title: 'Uhuul', message: 'All up to date' } };
        setSystemData(systemData);
      }
    } catch (err) {
      const data = { hasError: true, error: { title: 'Oops...', message: getErrorMessages(err.response.data) } };
      setSystemData(data);
    }
  };

  return { updateUser };
}
