import React from 'react';
import { View, Text, TouchableOpacity, Modal, Animated, Button, RefreshControl,ScrollView } from 'react-native';
export default class App extends React.Component {
    state={
        refreshed:false
    }
    onRefresh=()=>{
        this.setState({refreshed:true})
        setTimeout(()=>this.setState({refreshed:false}),5000)
    }

    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={this.state.refreshed}  onRefresh={()=>this.onRefresh()} />
                }
            >
                <Text>Pull down to see RefreshControl indicator</Text>
            </ScrollView>
        )
    }
}


