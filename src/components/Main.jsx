import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import SignOut from './SignOut';
import AppBar from './AppBar';
import { Route, Routes, Navigate } from 'react-router-native';
import theme from '../theme';

const styles = StyleSheet.create({
  default: {
    font: theme.fonts.font
  }
})

const Main = () => {
  const screenHeight = Dimensions.get('screen').height;
  const windowHeight = Dimensions.get('window').height;
  const navbarHeight = screenHeight - windowHeight + StatusBar.currentHeight;

  return (
    <View style={{...styles.default, marginBottom: navbarHeight }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/Sign In" element={<SignIn />} />
        <Route path="/Sign Out" element={<SignOut />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;