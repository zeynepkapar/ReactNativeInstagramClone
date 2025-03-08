import {Image, Dimensions} from 'react-native';

const FitImage = ({src}) => {
  const width = Dimensions.get('window').width;

  const ratio = 1080 / width;
  const height = 607 / ratio;

  return <Image style={{width, height}} source={{uri: src}} />;
};

export default FitImage;
