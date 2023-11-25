import { View, StyleSheet, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';
import Constants from 'expo-constants';
import { useState, useEffect } from 'react';

import AppBarTab from './AppBarTab';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColors.header,
    flexDirection: 'row'
  }
});

const AppBar = () => {
  const { loading, error, data } = useQuery(GET_USER)
  const [userAuthorized, setUserAuthorized] = useState(false)

  useEffect(() => {
    if (error) console.log(error)
    if (!loading && data) {
      if (data.me !== null) setUserAuthorized(true)
      else setUserAuthorized(false)
    }
  }, [loading, error, data])

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <AppBarTab item='Repositories' />
        {!userAuthorized && <AppBarTab item='Sign In' />}
        {userAuthorized && <AppBarTab item='Sign Out' />}
      </ScrollView>
    </View>
  )
};

export default AppBar;