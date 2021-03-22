import React, { Component, Fragment } from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {View,Text,TouchableOpacity, Modal, Animated,Button, Dimensions,TextInput} from 'react-native';

export default class Test_AbortFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: '',
      late:false
    }
  }
  fetchcall=async()=>{
    const abortController = new AbortController();
    const signal = abortController.signal;
    if(this.state.late==false){
        this.setState({late:true})
        setTimeout(() => {
            console.log('string response')
            // abortController.abort()
            
        }, 10000);

    }
    
      const response = await fetch('https://jsonplaceholder.typicode.com/photos',{
        signal 
      })
      
      .then(res=>res.json())
      
      console.log('return response')

  }
  render() {
  return (
        <View>
            <Text>Abort</Text>
            <Button title='Fetch call' onPress={()=>this.fetchcall()}/>
            <TextInput 
                onChangeText={()=>this.fetchcall()}
            />
        </View>

  );
  }
}