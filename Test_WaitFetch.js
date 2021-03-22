import React, { Component, Fragment } from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { View, Text, TouchableOpacity, Modal, Animated, Button, Dimensions, TextInput } from 'react-native';

export default class Test_WaitFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: '',
      last_controller: {},
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI4Y2EzMjYzMDNiNTBlZmQ2NjZiODY5NDlhM2VlNzdhMWEyOGIxNTFlZDk2MzY1YTE1YjlkZmQ1Mjc0YzMyZmY0NjExMDgzZjg1Y2JhYzk3In0.eyJhdWQiOiIxOTM4NDcxMiIsImp0aSI6IjI4Y2EzMjYzMDNiNTBlZmQ2NjZiODY5NDlhM2VlNzdhMWEyOGIxNTFlZDk2MzY1YTE1YjlkZmQ1Mjc0YzMyZmY0NjExMDgzZjg1Y2JhYzk3IiwiaWF0IjoxNjA2MTEyMzE2LCJuYmYiOjE2MDYxMTIzMTYsImV4cCI6MTYzNzY0ODMxNiwic3ViIjoiIiwic2NvcGVzIjpbXX0.nh4JA31j3uU5AOlru2XLnRusc44sniTal3S0zsrdtd7nQO2roljtqlTiC45f3evdwNvIL5EkqRP-Mry-kGA30xqhzmM0knahDsrNt2LJrwqxvZ-rXJz04s4ROO9-M_nkwo-fXvzdHMzBQke3_bBSYN4da5ZEkJ10suXaROAueqpjGhYsVmrvKDVQ9Ncl9NhQcN6yfqXz9kivCx7UDuPIrTV-uzwY6bYzjB10ovEzcJNpdZMql8P-44A-pu97-jgvQDWakhqmZLpK7o7fibLXvBNJW18cV8NEg-muumyNY3SzGE1L5hgbgUWP_XSrKyFQU_fK-YsPlGBNqXUgfC9uD_sULJ0ln614eDc4Zp4Zn-kLtbcut1z_sOwH5IuruR2Sg4AukzitGXWC_-lmnYoCu__lM9K7K02jgwbW7uSOmiLY4EoizM3aLfdPrclm3qi_iurhbi9qXGyVOCJWDnGB2UWK4GrFo08_2db2ABUxUhPww2VJwxbCjk5eLxjT3B4T4sI5LnUu1RfvtMrk1zvI0giy5MQQkKmeGmJChaMM7Hh0R0wh1ELXS3C_gmW4YddFSVeOtiaoj05-phoj4J44NNwns8Y2RZgOL5NCMp-S5DHcT699JthEewCHH_vFeEY4Cwlc6Qh7ZxoY4IIxe3hKxIZGd1rEcFBUiqbfvulRFwU'
    }
  }
  fetchcall = async (text) => {
    
    var abortController = new AbortController();
    this.setState({ last_controller: abortController })
    var signal = abortController.signal;
    try {
      this.state.last_controller.abort(); //abort last call
    }

    catch {
      console.log('first fetch')
    }
    setTimeout(async () => {

      var formdata = new FormData()
      formdata.append('keyword', text)
      try {
        const response = await fetch('http://koboautos.com/twic-terminal/connect/api/customers', {
          method: 'POST',
          headers: {
            "Authorization": 'Bearer' + " " + this.state.token
          },
          body: formdata,
          signal
        })

          .then(res => res.json())
          .then(res_json => console.log(res_json))
      }
      catch (err) {
        console.log(err)
      }
    }, 1500)




  }

  render() {

    return (
      <View>
        <TextInput
          onChangeText={(text) => {
            this.fetchcall(text)
          }}
          placeholder='Write here'
        />
      </View>

    );
  }
}



//
// export default class Test_WaitFetch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedItems: '',
//       val:[]
//     }
//   }
//   fetchcall=async()=>{
//     const abortController = new AbortController();
//     const signal = abortController.signal;
//     // setTimeout(() => {
//     //     abortController.abort()
//     // }, 100);
//       const response = await fetch('https://jsonplaceholder.typicode.com/photos',{
//         signal 
//       })

//       .then(res=>{res.json()})

//       console.log(response)

//   }

//   somemethod=(text)=>{
//       this.setState({val:[...this.state.val,text]})
//       console.log('val:',this.state.val.length)
//       console.log('text:',text.length)

//       setTimeout(()=>{
//             if(this.state.val.length>0){
//                 console.log(this.state.val[this.state.val.length-1])
//                 this.setState({val:[]})
//             }


//     },3000)
//     //   setTimeout()
//     //   alert(text)
//   }
//   render() {

//   return (
//         <View>
//             <Text>Abort</Text>
//             <Button title='Fetch call' onPress={()=>this.fetchcall()}/>
//             <TextInput 
//                 onChangeText={(text)=>{
//                     this.somemethod(text)
//                 }}
//                 // onEndEditing={(something)=>console.log(something)}
//                 placeholder='Write here'
//             />
//         </View>

//   );
//   }
// }