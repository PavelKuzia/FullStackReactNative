import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    await mutate({ variables: { username: username, password: password } })
  };

  return [signIn, result];
};

export default useSignIn;