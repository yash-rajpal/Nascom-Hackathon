import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,Button,
  Alert,
} from 'react-native';
// import firebaseConfig from './config'
import GetLocation from 'react-native-get-location'
import MapView, { Marker } from 'react-native-maps';
import * as firebase from 'firebase'


const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class App extends Component {
  lol={
    loaded:true
  }
  state = {
    latitude: 0,
    longitude:0,
    latitudeDelta: 0.0922,
  longitudeDelta: 0.0421, 
  loading:false
}
  constructor(props){
    super(props);
    global.val=true
    // this.state = {
    //     latitude: 0,
    //     longitude:0,
    //     latitudeDelta: 0.0922,
    //   longitudeDelta: 0.0421, 
    //   loading:false
    // }
    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
    })
    .then(location => {
        this.setState({
            latitude: location.latitude,
            longitude: location.longitude
        })
        // console.log(location)
    })
    .catch(error => {
        const { code, message } = error;
        // console.warn(code, message);
    })
}
// componentWillMount(){
//   firebase.database().ref('yash/').on('value', function (snapshot) {
//     // console.log(snapshot.val())
//     val = snapshot.val()
//     console.log(val);
    
//   });
// }
// componentWillMount(){
//   firebase.database().ref('yash/').on('value', function (snapshot) {
//     // console.log(snapshot.val())
//     val = snapshot.val()
//     console.log(val);
    
//   });
// }
componentDidMount() {
    // this._interval = setInterval(() => {
      // Your code
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
    })
    .then(location => {
        this.setState({
            latitude: location.latitude,
            longitude: location.longitude
        })
        console.log(location)
    })
    .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
    })
    // firebase.database().ref('/users/yash').on('value').then(function(snapshot) {
    //   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    //   // ...
    //   console.log(username)
//     // });
//     var starCountRef = firebase.database().ref('Users/yash');
// starCountRef.on('value', function(snapshot) {
//   updateStarCount(postElement, snapshot.val());
// });
// firebase.database().ref('yash/').on('value', function (snapshot) {
//   // console.log(snapshot.val())
//   val = snapshot.val()
//   console.log(val);
  
// });
    // }, 30000);

    // firebase.database().ref('yash/').on('value', function (snapshot) {
    //   // console.log(snapshot.val())
    //   val = snapshot.val()
    //   console.log(val);
    //   // this.setState({loading:true})
      
    // });
  }
 render(){
  if(this.state.loading){

       return(
     <View style={{flex:1}}> 
     <MapView
     style={{ flex: 1 },[styles.map]}
     initialRegion={{
     latitude: this.state.latitude,
     longitude: this.state.longitude,
     latitudeDelta: 0.0922,
     longitudeDelta: 0.0421}}
  >
  <Marker 
  coordinate={{
    latitude:this.state.latitude,
    longitude:this.state.longitude 
  }}
  description="my current position"
  title="my current position"
  />
  {/* <Marker
  coordinate={{ latitude:parseFloat(val.latitude1),
                      longitude:parseFloat(val.longitude1)
  }}
  /> */}
  <Marker
  coordinate={{
    latitude:12.5,
    longitude:80.
  }}
  description="demo position"
  title="Demo position"
  />

  </MapView>
<Button
title="Toggle location Settings"
onPress={()=>{
this.setState({loading:false})
console.log(this.state);

}
  
  
}
/>
     </View>
   )

 } 
 if(!this.state.loading) {
  return(
    <View style={{flex:1}}> 
    <MapView
    style={{ flex: 1 },[styles.map]}
    initialRegion={{
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421}}
 >
 {/* <Marker 
 coordinate={{
   latitude:this.state.latitude,
   longitude:this.state.longitude 
 }}
 
 /> */}
 {/* <Marker
 coordinate={{ latitude:parseFloat(val.latitude1),
                     longitude:parseFloat(val.longitude1)
 }}
 /> */}
 
 <Marker
 coordinate={{
   latitude:12.5,
   longitude:80.
 }}
 description="demo position"
 title="Demo position"
 />

 </MapView>
<Button
title="Toggle location Settings"
onPress={()=>{
this.setState({loading:true})
console.log(this.state);

}
 
 
}
/>
    </View>
  )
 }
}

  }

const styles=StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  }
})