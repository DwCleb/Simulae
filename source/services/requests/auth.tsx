import { useContext } from 'react';
import { useNavigation, CommonActions } from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import { UserContext, SystemContext } from '~/services/store/reducers';
import { API, URL } from '~/services/http';
import { setLogged, setToken } from '~/services/storage';
import { getErrorMessages } from '~/utils/FormHelpers';

interface RegisterProps {
  name: string;
  email: string;
  password: string;
}

interface AuthReturn {
  signIn(email: string, password: string): Promise<void | boolean>;
  signUp(data: RegisterProps): Promise<void>;
}

export function Auth(): AuthReturn {
  const { getUserData, setUserData } = useContext(UserContext);
  const { setSystemData } = useContext(SystemContext);

  const navigation = useNavigation();

  const { navigate } = CommonActions;

  const { dispatch } = navigation;

  getUserData();

  const signIn = async (email: string, password: string): Promise<void | boolean> => {
    /**
     * TEST WITHOUT BACKEND
     */
    dispatch(
      navigate({
        name: 'App',
      })
    );
    // try {
    //   const response = await API.post(URL.LOGIN, { email, password });

    //   const { status, data } = response;

    //   if (status === 200) {
    //     setToken(data.token);

    //     setLogged(true);

    //     setUserData(data.user);

    //     dispatch(
    //       navigate({
    //         name: 'App',
    //       })
    //     );
    //   }
    // } catch (err) {
    //   const data = { hasError: true, error: { title: 'Oops...', message: getErrorMessages(err.response.data) } };
    //   setSystemData(data);
    // }
  };

  interface SignUpRequest {
    name: string;
    email: string;
    password: string;
  }

  const signUp = async (data: SignUpRequest): Promise<void> => {
    try {
      const response = await API.post(`${URL.REGISTER}`, data);

      if (response.status === 200) {
        Toast.show('Welcome', Toast.LONG);
        signIn(data.email, data.password);
      }
    } catch (err) {
      const data = { hasError: true, error: { title: 'Oops...', message: getErrorMessages(err.response.data) } };
      setSystemData(data);
    }
  };

  return { signIn, signUp };
}
