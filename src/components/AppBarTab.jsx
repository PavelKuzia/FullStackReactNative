import { Text, StyleSheet } from 'react-native';
import theme from '../theme';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  barItem: {
    fontSize: theme.fontSizes.heading,
    color: theme.colors.header,
    paddingBottom: 20,
    paddingTop: 30,
    marginLeft: 15
  }
});

const AppBarTab = ({item}) => (
	<Link to={item}>
    <Text style={styles.barItem}>{item}</Text>
  </Link> 
)

export default AppBarTab;