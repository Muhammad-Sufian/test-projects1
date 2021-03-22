import React, { Component, Fragment } from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { View, Text, TouchableOpacity, Modal, Animated, Button, Dimensions, TextInput } from 'react-native';

export default class Test_App extends React.Component {
    state={
        pos_x:null,
        pos_y:null
    }
    render() {
        return (
            <View style={{backgroundColor:'green',height:100,width:100,left:this.state.pos_x,top:this.state.pos_y}} onMoveShouldSetResponder={(e)=>{
                //moving towards right
                if(e.nativeEvent.pageX-this.state.pos_x <=110 && e.nativeEvent.pageX-this.state.pos_x >=0 )
                {
                    
                        this.setState({pos_x:this.state.pos_x+20})
                        
                    
                }
                if(this.state.pos_x-e.nativeEvent.pageX <=110 && this.state.pos_x-e.nativeEvent.pageX >=0 )
                {
                    
                        this.setState({pos_x:this.state.pos_x-20})
                        
                    
                }
                console.log(e.nativeEvent.pageX,' ',e.nativeEvent.pageY)
            }}>
            </View>

        );
    }
}