import { View, Image, Text, StyleSheet } from 'react-native';
import React from 'react';
import theme from './../theme';


const styles = StyleSheet.create({
	headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5
	}, 
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    paddingLeft: 5
  },
	avatar: {
    width: 65,
    height: 65,
    borderRadius: 15,
    marginRight: 5,
    flex: 0,
    alignItems: 'flex-start'
	},
  header: {
    fontWeight: 'bold',
    fontSize: 16
  },
  description: {
    flex: 1,
    paddingTop: 5
  },
  language: {
    fontSize: 14,
    backgroundColor: theme.colors.primary,
    color: 'white',
    textAlign: 'center',
    width: 95,
    height: 40,
    borderRadius: 5,
    textAlignVertical: 'center',
    marginTop: 10
  },
  informationContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  infoColumnContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 10,
    padding: 15
  },
  infoHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10
  }
})

const RepositoryItem = ({item}) => {
  const starsF = parseInt(item.stargazersCount / 1000) + '.' + Math.round(item.stargazersCount % 1000 / 100, 1) + 'K'
  const forksF = parseInt(item.forksCount / 1000) + '.' + Math.round(item.forksCount % 1000 / 100, 1) + 'K'

  return(
    <View>
      <View style={styles.headerContainer}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.columnContainer}>
          <Text style={styles.header}>{item.fullName}</Text>
          <View style={{flexDirection:'row'}}> 
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.informationContainer}>
        <View style={{...styles.infoColumnContainer, paddingLeft: 50}}>
          <Text style={styles.infoHeader}>{starsF}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.infoColumnContainer}>
          <Text style={styles.infoHeader}>{forksF}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.infoColumnContainer}>
          <Text style={styles.infoHeader}>{item.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.infoColumnContainer}>
          <Text style={styles.infoHeader}>{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
)};

export default RepositoryItem;