import React from 'react';
import {View,Text,TouchableOpacity, Modal, Animated,Button} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob'
import DocumentPicker from 'react-native-document-picker';

export default class App extends React.Component {
  state={
    file:''
  }
  select=async()=>{
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
      readContent:true
      
    });
    console.log(res)
    this.setState({file:res})
  }
  read=async()=>{
    // console.log(_dirname)
      
       

    var data=''
      
    RNFetchBlob.fs.readStream(
        // file path
        
        this.state.file.uri,
        // encoding, should be one of `base64`, `utf8`, `ascii`
        'base64',
        // (optional) buffer size, default to 4096 (4095 for BASE64 encoded data)
        // when reading file in BASE64 encoding, buffer size must be multiples of 3.
        4095)
    .then((ifstream) => {
        ifstream.open()
        ifstream.onData((chunk) => {
          // when encoding is `ascii`, chunk will be an array contains numbers
          // otherwise it will be a string
          data += chunk
        })
        ifstream.onError((err) => {
          console.log('oops', err)
        })
        ifstream.onEnd(() => {
          console.log(data)
        })
    })
  }
  
  render(){
    console.log(this.state.file)
    return(
      <View>
          <Text>Test</Text>
          <Button title='Select' onPress={()=>this.select()}></Button>
          <Button title='Read' onPress={()=>this.read()}></Button>
      </View>
    )
  }
}


