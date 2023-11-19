import { View, StyleSheet } from 'react-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import AppBar from './AppBar';
import { Route, Routes, Navigate } from 'react-router-native';
import theme from '../theme';

const styles = StyleSheet.create({
  default: {
    font: theme.fonts.font
  }
})

const Main = () => {
  return (
    <View style={styles.default}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/Sign In" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;