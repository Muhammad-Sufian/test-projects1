import React from 'react';
import { View, Text, TouchableOpacity, Modal, Animated, Button, FlatList } from 'react-native';
export default class App extends React.Component {
    state = {
        data: [
            { id: 0 },
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 },
            { id: 13 },
            { id: 14 },
        ]
    }

    renderItems = (item) => {
        return (
            <View style={{ width: '95%', height: 60, backgroundColor: 'rgb(100,180,130)', marginBottom: 15, justifyContent: 'center', alignSelf: 'center' }}>
                <Text style={{ fontSize: 20, alignSelf: 'center' }}>{item.item.id}</Text>
            </View>
        )
    }

    render() {
        return (
            <View>
                < FlatList
                    data={this.state.data}
                    renderItem={(item) => this.renderItems(item)}
                    keyExtractor={item => item.id}
                    onEndReached={() => console.log('end reached')}
                    // How Close To The End Of List Until Next Data Request Is Made
                    onEndReachedThreshold={0.5}
                // Refreshing (Set To True When End Reached)
                // refreshing={this.state.refreshing}
                />
            </View>
        )
    }
}


