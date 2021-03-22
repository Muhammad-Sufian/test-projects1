import React from 'react';
import {View,Text,TouchableOpacity, Modal, Animated,Button, Dimensions,TextInput} from 'react-native';

export default class BasicAnim extends React.Component {
  state={
    file:'',
    time:50,
    left_pos:0,
    interval:10,
    animated_pos: new Animated.Value(0),
    animated_duration:5000,
    refresh:false
  }
  anim=()=>{
      setTimeout(()=>{
          if(this.state.left_pos<=Dimensions.get('window').width){
            this.setState({left_pos:this.state.interval+this.state.left_pos})
            this.anim()
          }
          
      },this.state.time)
  }
  
  anim2=()=>{
    Animated.timing(this.state.animated_pos, {
        toValue: Dimensions.get('window').width,
        duration: this.state.animated_duration,
        useNativeDriver:false
    }).start();
  }
  
  render(){
    return(
      <View style={{height:'100%',width:'100%',backgroundColor:'black'}}>
          <View style={{height:30,width:30,marginTop:30,left:this.state.left_pos,backgroundColor:'blue'}}></View>
          <Animated.View
          style={{height:30,width:30,marginTop:30,backgroundColor:'green',
              left: this.state.animated_pos }} 
          >
          </Animated.View>
          
          <Button title='Start Animation' onPress={()=>this.anim()}></Button>
          <Button title='Clear' onPress={()=>this.setState({left_pos:0})}></Button>
          <Button title='Start Animation2' onPress={()=>this.anim2()}></Button>
          <Button title='Clear Animation2' onPress={()=>this.setState({animated_pos: new Animated.Value(0)})}></Button>
          <TextInput 
            placeholder='Anim 1 Time'
            onChangeText={(text)=>this.setState({time:parseInt(text)})}
            keyboardType='decimal-pad'
            style={{backgroundColor:'rgb(100,200,100)'}}
          ></TextInput>
          <TextInput 
            placeholder='Anim 1 Interval'
            onChangeText={(text)=>this.setState({interval:parseInt(text)})}
            keyboardType='decimal-pad'
            style={{backgroundColor:'rgb(100,100,200)'}}
          ></TextInput>
          <TextInput 
            placeholder='Anim 2 Duration'
            onChangeText={(text)=>this.setState({animated_duration:parseInt(text)})}
            keyboardType='decimal-pad'
            style={{backgroundColor:'rgb(200,100,100)'}}
          ></TextInput>
      </View>
    )
  }
}


