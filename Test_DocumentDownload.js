import React from 'react';
import {View,Text,TouchableOpacity, Modal, Animated,Button} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob'

export default class Test_DocumentDownload extends React.Component {
download=()=>{
    const { config, fs } = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let date = new Date()
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        //Related to the Android only
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/file_' +
          Math.floor(date.getTime() +
          date.getSeconds() / 2),
        description: 'Image',
      },
    };
    config(options)
      .fetch('GET', 'https://www.soundczech.cz/temp/lorem-ipsum.pdf')
      .then(res => {
        //Showing alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        alert('Image Downloaded Successfully.');
      });
}
  render(){
    return(
      <View>
          <Text>Test_DocumentDownload</Text>
          <Button title='Download' onPress={()=>this.download()}></Button>
      </View>
    )
  }
}


