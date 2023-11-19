import { View, Text, Pressable, StyleSheet } from "react-native"
import FormikTextInput from "./FormikTextInput"
import theme from "../theme"

const styles = StyleSheet.create({
  submitButton: {
    fontSize: 22,
    color: 'white',
    margin: 10,
    backgroundColor: theme.colors.primary,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    textAlign: 'center'
  }
})

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable onPress={onSubmit}>
        <Text style={styles.submitButton}>Sign In</Text>
      </Pressable>
    </View>
  )
}

export default SignInForm