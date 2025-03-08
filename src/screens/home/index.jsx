import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Header from '../../components/home/Header';
import Stories from '../../components/home/Stories';
import posts from '../../utils/post';
import Post from '../../components/home/Post';
import {COLORS} from '../../theme/color';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
});
