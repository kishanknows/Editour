import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import VideoPlayer from '../components/VideoPlayer';
import styles from '../styles/styles';
import Button from '../components/Button';
import DocumentPicker from 'react-native-document-picker';
import { connect } from 'react-redux';
import { changeFilePath } from '../redux/actions';
import RNFS from 'react-native-fs';
import { FFmpegKitConfig } from 'ffmpeg-kit-react-native';

const HomeScreen = ({navigation,paths,newFilePath}) => {
  const [next, setNext] = useState(false);
  const [name, setName] = useState(0);
  RNFS.mkdir(RNFS.CachesDirectoryPath + '/temp');
  console.log('HomeScreen Rendered');
  return (
    <View style={styles.container}>
      {paths.filePath ? (
        <VideoPlayer path={paths.filePath} />
      ) : (
        <Text>Choose a file to get Started!</Text>
      )}
      <View style={{flexDirection:"row"}}>
      <Button
        title="File pick"
        onPress={async () => {
          try {
            setName(name+1);
            const PickerResult = await DocumentPicker.pickSingle({
              presentationStyle: 'fullScreen',
            });
            const inputFile = RNFS.CachesDirectoryPath + `/temp/${name}.mp4`;
            RNFS.copyFile(PickerResult.uri,inputFile).then(()=>newFilePath(inputFile));   
            setNext(true);
          } catch (err) {
            console.log('No file Selected');
          }
        }}
      />
      {next && (
        <Button
          title="Next"
          onPress={() => {
            setNext(false);
            navigation.navigate('Filters');
          }}
        />
      )}
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  paths: state.filePath,
});


const mapDispatchToProps = dispatch => {
  return {
    newFilePath: (path) => {
      dispatch(changeFilePath(path))
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);
