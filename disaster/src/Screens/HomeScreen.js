import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';
import Funding from '../Components/Funding';
import {WebView} from 'react-native-webview';
import GetLocation from 'react-native-get-location';
import MapScreen from '../Components/MapScreen';

// global.tmpArray = []

//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+this.state.latitude+','+this.state.longitude+'&radius=5000&types=hospital&key= // your key here'

export default class HomeScreen extends Component {
    // componentWillMount(){
    //     fetch('')
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   console.log(responseJson);
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
    // }
    constructor(){
        super();
        this.state = {items: [],loading: false}

    }
    run = new Promise((resolve,reject)=>{
        var out=[]
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => {
                latitude=location.latitude,
                longitude= location.longitude,
                out=[latitude,longitude]
            // console.log(location)
            resolve(out)
        }).catch(error => {
            const { code, message } = error;
            console.warn(code, message);
            reject(location)
        })
    })
    
  render() {
    // latitude,longitude
    // console.log(this.st÷ate.latitude);
    
   
    // console.log(lati÷tude);
    
    this.run.then((result)=>{
        fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+result[0]+','+result[1]+'&radius=5000&types=hospital&key=yourkeyhere')
        .then((response) => response.json())
        .then((responseJson) => {
        //   console.log(responseJson.results);
              this.state.items = responseJson.results
              this.setState({
                  loading:true
              })
            //   console.log(this.state.items)
        // global.items = responseJson.results
        // let items = responseJson.results
        //   x=responseJson.results
        // global.x = responseJson.results
        //   x=responseJson.results
        })
        .catch((error) => {
          console.error(error);
        });
    }).catch((error)=>{
        console.log(error);
        
    })
    if(!this.state.loading){return null}
    else{
    return (
        <View style={{flex:1,backgroundColor:'#F4EEEC'}}>
            <View style={{flex:0.05,justifyContent:'center'}}>
                <Text style={{fontSize:20,fontWeight:'bold',flex:1,justifyContent:'center',textAlign:'center'}}>Nearby Hospitals</Text>
            </View>
            <View style={{flex:0.95}}>
            <MapScreen />
            </View>
</View>
    );}
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:'#E1F3F9'
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor:"#E1F3F9",
  },
  separator: {
    marginTop: 10,
  },
  /*** card *****/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white"
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor:"#74C2DD",
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /*** card components *****/
  title:{
    fontSize:18,
    flex:1,
  }, 
  description:{
    fontSize:15,
    color:"#888",
    flex:1,
    marginTop:5,
    marginBottom:5,
  },
  time:{
    fontSize:13,
    color: "#808080",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  iconData:{
    width:15,
    height:15,
    marginTop:5,
    marginRight:5
  },
  timeContainer:{
    flexDirection:'row'
  },
  /*** social bar *******/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});