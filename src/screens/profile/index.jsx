import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ProfileHeader from '../../components/profile/ProfileHeader';
import ProfileBio from '../../components/profile/ProfileBio';
import ProfileStory from '../../components/profile/ProfileStory';
import ProfileInfo from '../../components/profile/ProfileInfo';
import posts from '../../utils/post';

const ProfileScreen = () => {
  const screenWidth = Dimensions.get('window').width;
  const numColumns = 3;

  const imageSize = (screenWidth - (numColumns + 1) * 2) / numColumns;

  const renderProps = ({item}) => (
    <TouchableOpacity>
      <Image
        source={{uri: item.image}}
        style={{width: imageSize, height: imageSize, margin: 1}}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <ProfileHeader />
        <ProfileInfo />
        <ProfileBio />
        <ProfileStory />

        <FlatList
          keyExtractor={index => index.toString()}
          data={posts}
          renderItem={renderProps}
          numColumns={numColumns}
          style={{marginTop: 15}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
