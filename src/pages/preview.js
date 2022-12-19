import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import VideoPlayer from '../components/VideoPlayer';
import styles from '../styles/styles';
import Button from '../components/Button';
import DocumentPicker from 'react-native-document-picker';
import {connect} from 'react-redux';
import {changeFilePath} from '../redux/actions';
import RNFS from 'react-native-fs';

const PreviewScreen = ({navigation, paths, newFilePath}) => {
  var date = new Date().getTime();
  console.log('PreviewScreen Rendered');
  return (
    <View style={styles.container}>
      <VideoPlayer path={paths.filePath} />
      <View style={{flexDirection: 'row'}}>
        <Button
          title="Filters"
          onPress={() => {
            navigation.navigate('Filters');
          }}
        />
        <Button
          title="Save"
          onPress={() => {
            RNFS.moveFile(
              paths.filePath,
              RNFS.DownloadDirectoryPath + `/${date}.mp4`,
            )
              .then(() => {
                console.log('Saved to downloads.');
                RNFS.unlink(RNFS.CachesDirectoryPath + '/temp').then(
                  console.log('temp files deleted!'),
                );
              })
              .catch(err => console.log(err));
            newFilePath('');
            navigation.navigate('Home');
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  paths: state.filePath,
});

const mapDispatchToProps = dispatch => {
  return {
    newFilePath: path => {
      dispatch(changeFilePath(path));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewScreen);
