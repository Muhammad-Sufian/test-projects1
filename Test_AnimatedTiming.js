import React from 'react';
import { View, Text, TouchableOpacity, Modal, Animated, Button, TextInput, PanResponder } from 'react-native';

//togglebutton
export default class App extends React.Component {
    state = {
        shakeXaxis: new Animated.Value(0),
        on_off:false
    }

    anim1 = () => {

        if(!this.state.on_off){
            Animated.sequence([
                Animated.timing(this.state.shakeXaxis, {
                    toValue: 50,
                    duration: 300,
                    useNativeDriver: false
                }),
    
            ]).start()
            this.setState({on_off:!this.state.on_off})
        }else{
            Animated.sequence([
                Animated.timing(this.state.shakeXaxis, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: false
                }),
    
            ]).start()
            this.setState({on_off:!this.state.on_off})
        }
        

    }

    render() {


        return (
            <View style={{ height: '100%', width: '100%', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ height: 50, width: 100 }}>
                    <View style={{ height: '100%', width: '100%', borderRadius: 30, backgroundColor: (!this.state.on_off)?'gray':'lime' }}>
                        <Animated.View style={{ height: 50, width: 50,borderRadius:50,elevation:10,backgroundColor:'white', justifyContent: 'center', transform: [{ translateX: this.state.shakeXaxis }] }}>
                            <TouchableOpacity onPress={() => this.anim1()} style={{ height: 50, width: 100, justifyContent: 'center' }} activeOpacity={0.9}>
                            </TouchableOpacity>

                        </Animated.View>
                    </View>
                </View>






            </View>
        )
    }
}


//shake
// export default class App extends React.Component {
//     state = {
//         shakeXaxis: new Animated.Value(0),

//     }

//     anim1 = () => {


//         Animated.sequence([
//             Animated.timing(this.state.shakeXaxis, {
//                 toValue: 20,
//                 duration: 100,
//                 useNativeDriver: false
//             }),
//             Animated.timing(this.state.shakeXaxis, {
//                 toValue: -20,
//                 duration: 100,
//                 useNativeDriver: false
//             }),
//             Animated.timing(this.state.shakeXaxis, {
//                 toValue: 20,
//                 duration: 100,
//                 useNativeDriver: false
//             }),
//             Animated.timing(this.state.shakeXaxis, {
//                 toValue: -20,
//                 duration: 100,
//                 useNativeDriver: false
//             })

//         ]).start()

//     }

//     render() {


//         return (
//             <View style={{ height: '100%', width: '100%', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>

//                 <Animated.View style={{ height: 100, width: 100, justifyContent: 'center', alignSelf: 'center', transform: [{ translateX:this.state.shakeXaxis}] }}>
//                     <TouchableOpacity onPress={() => this.anim1()} style={{ height: 100, width: 100, backgroundColor: 'rgb(100,50,200)', justifyContent: 'center' }} activeOpacity={0.9}>
//                     </TouchableOpacity>

//                 </Animated.View>



//             </View>
//         )
//     }
// }

//Sequence of animations
// export default class App extends React.Component {
//     state = {
//         scaleX: new Animated.Value(1),
//         scaleY: new Animated.Value(1),

//     }

//     anim1 = () => {

//         // this.state.rotate.addListener(({value})=>console.log(value))
//         // this.state.rotate.removeAllListeners()

//         Animated.sequence([
//             Animated.spring(this.state.scaleX, {
//                 toValue: 2,
//                 duration: 2000,
//                 useNativeDriver: false
//             }),
//             Animated.spring(this.state.scaleY, {
//                 toValue: 2,
//                 duration: 2000,
//                 useNativeDriver: false
//             }),
//             Animated.parallel([
//                 Animated.spring(this.state.scaleX, {
//                     toValue: 0.5,
//                     duration: 2000,
//                     useNativeDriver: false
//                 }),
//                 Animated.spring(this.state.scaleY, {
//                     toValue: 0.5,
//                     duration: 2000,
//                     useNativeDriver: false
//                 })
//             ])

//         ]).start()

//     }

//     render() {





//         return (
//             <View style={{ height: '100%', width: '100%', justifyContent: 'center' }}>

//                 <Animated.View style={{ height: 100, width: 100, justifyContent: 'center', alignSelf: 'center', transform: [{ scaleX: this.state.scaleX},{scaleY:this.state.scaleY}] }}>

//                     <TouchableOpacity onPress={() => this.anim1()} style={{ height: '100%', width: '100%', backgroundColor: 'rgb(100,50,200)', justifyContent: 'center' }} activeOpacity={0.9}>
//                         <Text style={{ alignSelf: 'center', fontSize: 17 }}>Skewed</Text>
//                     </TouchableOpacity>
//                 </Animated.View>
//             </View>
//         )
//     }
// }

// //rotateY
// export default class App extends React.Component {
//     state = {

//         rotate: new Animated.Value(0),
//     }

//     anim1 = () => {

//         Animated.loop(
//             Animated.timing(this.state.rotate, {
//                 toValue: 360,
//                 duration: 5000,
//                 useNativeDriver: false
//             })
//         ).start();


//     }

//     render() {
//         var spin = this.state.rotate.interpolate({
//             inputRange: [0, 360],
//             outputRange: ['0deg', '360deg']
//         })




//         return (
//             <View style={{ height: '100%', width: '100%', justifyContent: 'center' }}>

//                 <Animated.View style={{ height: 100, width: 100, justifyContent: 'center', alignSelf: 'center', transform: [{ rotateY: spin }] }}>

//                     <TouchableOpacity onPress={() => this.anim1()} style={{ height: '100%', width: '100%', backgroundColor: 'rgb(100,50,200)', justifyContent: 'center' }} activeOpacity={0.9}>
//                         <Text style={{ alignSelf: 'center', fontSize: 17 }}>Skewed</Text>
//                     </TouchableOpacity>
//                 </Animated.View>
//             </View>
//         )
//     }
// }

//pan responder
// export default class App extends React.Component {
//     state={

//     }
//     pan= new Animated.ValueXY()
//     panResponser = PanResponder.create({
//         onMoveShouldSetPanResponder:()=>true,
//         onPanResponderMove: Animated.event([
//             null,
//             {dx:this.pan.x,dy:this.pan.y}
//         ]),
//         // onPanResponderRelease:()=>{
//         //     Animated.spring(this.pan,{
//         //         toValue:{x:0,y:0}
//         //     }).start()
//         // }
//         onPanResponderStart:()=>{
//             Animated.spring(this.pan,{
//                         toValue:{x:100,y:100}
//                     }).start()
//         }
//     })

//     render() {
//         return (
//             <View style={{ height: '100%', width: '100%', justifyContent:'center' }}>

//                 <Animated.View style={{ height: 50, width: 50, justifyContent: 'center',transform:[{translateX:this.pan.x},{translateY:this.pan.y}]}}
//                 {...this.panResponser.panHandlers}
//                 >

//                     <View style={{ height: '100%', width: '100%', backgroundColor: 'rgb(100,50,200)',}} activeOpacity={0.9}> 

//                      </View>
//                 </Animated.View>
//             </View>
//         )
//     }
// }

// //smooth motion
// export default class App extends React.Component {
//     state = {
//         move: new Animated.Value(10),
//         moved_to_right:false
//     }

//     anim1 = () => {
//         if(!this.state.moved_to_right){
//             Animated.spring(this.state.move, {
//                 toValue: 300,
//                 duration: 1000,
//                 useNativeDriver: false
//             }).start();
//         }else{
//             Animated.spring(this.state.move, {
//                 toValue: 10,
//                 duration: 1000,
//                 useNativeDriver: false
//             }).start();
//         }

//         this.setState({moved_to_right:!this.state.moved_to_right})

//     }

//     render() {
//         return (
//             <View style={{ height: '100%', width: '100%', justifyContent:'center' }}>

//                 <Animated.View style={{ height: 50, width: 50, justifyContent: 'center',left:this.state.move}}>

//                     <TouchableOpacity  onPress={() => this.anim1()} style={{ height: '100%', width: '100%', backgroundColor: 'rgb(100,50,200)',}} activeOpacity={0.9}> 

//                      </TouchableOpacity>
//                 </Animated.View>
//             </View>
//         )
//     }
// }

//Rotation
// export default class App extends React.Component {
//     state = {
//         rotate: new Animated.Value(0),
//     }

//     anim1 = () => {

//         Animated.loop(
//             Animated.timing(this.state.rotate, {
//                 toValue: 360,
//                 duration: 5000,
//                 useNativeDriver: false
//             })
//         ).start();


//     }

//     render() {
//         var spin = this.state.rotate.interpolate({
//             inputRange:[0,360],
//             outputRange:['0deg','360deg']
//         })
//         return (
//             <View style={{ height: '100%', width: '100%', justifyContent:'center' }}>

//                 <Animated.View style={{ height: 150, width: 150, justifyContent: 'center',alignSelf:'center',transform:[{rotate:spin}] }}>

//                     <TouchableOpacity  onPress={() => this.anim1()} style={{ height: '100%', width: '100%', backgroundColor: 'rgb(100,50,200)',}} activeOpacity={0.9}> 

//                      </TouchableOpacity>
//                 </Animated.View>
//             </View>
//         )
//     }
// }

//Button pressin & pressout
// export default class App extends React.Component {
//     state = {
//         width: new Animated.Value(240),
//         height:new Animated.Value(80)
//     }

//     anim2 = () => {
//         console.log('anim2')
//         Animated.timing(this.state.width, {
//             toValue: 230,
//             duration: 1000,
//             useNativeDriver: false
//         }).start()
//         Animated.timing(this.state.height, {
//             toValue: 70,
//             duration: 1000,
//             useNativeDriver: false
//         }).start()
//     }

//     anim1 = () => {
//         console.log('anim2')
//         Animated.timing(this.state.width, {
//             toValue: 240,
//             duration: 500,
//             useNativeDriver: false
//         }).start()
//         Animated.timing(this.state.height, {
//             toValue: 80,
//             duration: 500,
//             useNativeDriver: false
//         }).start()
//     }

//     render() {
//         return (
//             <View style={{ height: '100%', width: '100%', justifyContent:'center' }}>

//                 <Animated.View style={{ height: this.state.height, width: this.state.width, justifyContent: 'center',alignSelf:'center' }}>

//                     <TouchableOpacity onPressIn={() => this.anim2()} onPressOut={() => this.anim1()} style={{ height: '100%', width: '100%', backgroundColor: 'rgb(100,50,200)', }} activeOpacity={0.9}>

//                     </TouchableOpacity>
//                 </Animated.View>
//             </View>
//         )
//     }
// }




//search bar open
// export default class App extends React.Component {
//     state={
//         width:new Animated.Value(0)
//     }

//     anim2=()=>{
//       console.log('anim2')
//       Animated.timing(this.state.width,{
//           toValue:200,
//           duration:1000,
//           useNativeDriver:false
//       }).start()
//     }

//     render(){
//       return(
//         <View style={{height:'100%',width:'100%',flexDirection:'row'}}>

//             {/* <Animated.View style={{backgroundColor:'orange', height:50,width:this.state.width,alignSelf:'center'}}/> */}

//           <Animated.View style={{ height:50,width:this.state.width,justifyContent:'center'}}>
//             <TextInput
//               style={{width:'100%',height:50,borderWidth:0.7,borderColor:'black'}} placeholder='Name'
//             ></TextInput>
//             </Animated.View>
//             <TouchableOpacity onPress={()=>this.anim2()} style={{height:50,width:50,backgroundColor:'rgb(100,50,200)'}}></TouchableOpacity>
//         </View>
//       )
//     }
//   }


