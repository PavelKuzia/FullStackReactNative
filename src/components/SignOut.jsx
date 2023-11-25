import { useApolloClient } from '@apollo/client';
import { useNavigate  } from 'react-router-native';
import useAuthStorage from '../hooks/useAuthStorage';

const SignOut = () => {
  const authStorage = useAuthStorage();
  const client = useApolloClient();
  const navigate = useNavigate();

  const signOut = async () => {
    await authStorage.removeAccessToken()
    client.resetStore()
    navigate('/')
    console.log('Function has been executed')
  }
  
  signOut()

  return (
    <></>
  )
}

export default SignOut