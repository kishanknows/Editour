import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from '../styles/styles';
import {connect} from 'react-redux';
import {changeFilePath} from '../redux/actions';
import {FFmpegKit, FFmpegKitConfig, ReturnCode} from 'ffmpeg-kit-react-native';
import RNFS from 'react-native-fs';
import {useEffect, useState} from 'react';

const DATA = [
  {id: 1, title: 'Slow motion'},
  {id: 2, title: 'Colour inversion'},
  {id: 3, title: 'Compress video'},
];
const Item = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text style={styles.itemTitle}>{item.title}</Text>
  </TouchableOpacity>
);

const FilterScreen = ({navigation, path, newFilePath}) => {
  console.log('FilterScreen Rendered');
  const [name, setName] = useState(0);

  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        onPress={() => {
          ffmpegCommand(item.id, path.filePath);
          setName(name + 1);
        }}
      />
    );
  };

  const ffmpeg = (command, uri) => {
    const tempPath = `${RNFS.CachesDirectoryPath}/temp/${name}.mp4`;
    FFmpegKit.executeAsync(`-i ${uri} ${command} ${tempPath}`).then(
      FFmpegKitConfig.enableFFmpegSessionCompleteCallback(() => {
        newFilePath(tempPath);
        navigation.navigate('Preview');
      }),
    );
    navigation.navigate('Loading');
  };

  const ffmpegCommand = (id, uri) => {
    switch (id) {
      case 1:
        ffmpeg(`-filter:v "setpts=2*PTS"`, uri);
        break;
      case 2:
        ffmpeg(`-vf negate`, uri);
        break;
      case 3:
        ffmpeg(`-vcodec libx265 -crf 28`, uri);
        break;
      default:
        break;
    }
  };
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    path: state.filePath,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    newFilePath: path => {
      dispatch(changeFilePath(path));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterScreen);
