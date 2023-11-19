import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 24,
    margin: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 3,
    padding: 10
  },
  error: {
    borderColor: theme.colors.error
  }
});

const TextInput = ({ style, error, ...props }) => {
  let textInputStyle = [style, styles.inputStyle]
  if (error) {
    textInputStyle = [style, styles.inputStyle, styles.error]
  }

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;