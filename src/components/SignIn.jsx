import { Formik } from 'formik';
import { useEffect } from 'react';
import * as yup from 'yup';
import SignInForm from './SignInForm';
import useSignIn from '../hooks/useSignIn'
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import { useNavigate  } from 'react-router-native';


const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignIn = () => {
  const authStorage = useAuthStorage();
  const [signIn, result] = useSignIn();
  const client = useApolloClient();
  const navigate = useNavigate();
  
  const onSubmit = async values => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      navigate('/')
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const setToken = async (token) => {
      await authStorage.setAccessToken(token)
      client.resetStore()
    }
    if (result.data) {
      setToken(result.data.authenticate.accessToken)
      .catch(err => console.log(err))
    }
  }, [result])

  const initialValues = {
    username: '',
    password: ''
  }

  return (
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
};

export default SignIn;