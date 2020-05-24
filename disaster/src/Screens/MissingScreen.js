import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView
} from 'react-native';
import call from 'react-native-phone-call';

global.args = {
  number: '7014374566', // String value with the number to call
  prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}

export default class MissingScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible:false,
      userSelected:[],
      data: [
        {id:1,  name: "Ajay Mehta",   image:"https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png",Date:12-10-19},
        {id:2,  name: "Rahul Raman",    image:"https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png",Date:12-10-19},
        {id:3,  name: "Sinister",       image:"https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png",Date:12-10-19} ,
        {id:4,  name: "Walter",   image:"https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png",Date:12-10-19} ,
        {id:5,  name: "Raju Rastogi",   image:"https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png",Date:12-10-19} ,
      ]
    };
  }

  clickEventListener = (item) => {
    Alert.alert('Message', 'Item clicked. '+item.name);
  }
  

  render() {
    return (
      <View style={styles.container}>
         <View style={{flex:0.05,justifyContent:'center'}}>
            <Text style={{fontSize:20,fontWeight:'bold',flex:1,justifyContent:'center',textAlign:'center'}}>Missing Persons</Text>
        </View>
        <View style={{flex:0.95}}>
        <FlatList 
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
              <Image style={styles.image} source={{uri: item.image}}/>
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.count}>12-10-17</Text>
                <TouchableOpacity style={styles.followButton} onPress={()=> call(args).catch(console.error)}>
                  <Text style={styles.followButtonText}>7014374566</Text>  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#F4EEEC"
  },
  contentList:{
    flex:1,
  },
  cardContent: {
      flex:1,
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },

  name:{
    fontSize:18,
    flex:1,
    // alignSelf:'center',
    color:"#3399ff",
    fontWeight:'bold'
  },
  count:{
    fontSize:14,
    flex:1,
    // backgroundColor:'black',
    // alignSelf:'center',
    color:"#6666ff"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#dcdcdc",
  },
  followButtonText:{
    color: "#dcdcdc",
    fontSize:12,
  },
});  