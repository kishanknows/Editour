import styles from '../styles/styles';
import Video from 'react-native-video';

const VideoPlayer = ({path}) => {
  return (
    <Video
      source={{uri:path}}
      style={styles.topVideo}
      resizeMode={'contain'}
    />
  );
};
export default VideoPlayer;
