import React, { Component } from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet,
    Button
  } from 'react-native';
  import call from 'react-native-phone-call'
import { TouchableOpacity } from 'react-native-gesture-handler';
import SmsScreen from '../Components/SmsScreen'

  global.args = {
    number: '911', // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}

export default class Sos extends Component{
    render(){
        return (
        <View style={{flex:1}}>
        <Text style={{textAlign:'center',fontSize:24,paddingTop: 12,paddingRight:10,fontWeight:'bold'}}>SOS</Text>
        <View>
          <Text style={{fontSize:30,fontWeight:'bold',top:10}}>Dashboard</Text>
        </View>
        <View style={styles.button}>
        <View style={{flexDirection:'row',flex:1,borderRadius:100,borderRadius:300,top:120}}>
          {/* <View style={{flex:1,backgroundColor:'black'}}> */}
        <View style={{padding: 20,width:'100%',backgroundColor:'grey',flex:0.3}}>
          {/* <View style={{flex:1,backgroundColor:'black',height:'100%'}}> */}
   <Button 
          color= "grey"
          title="FIRE"
          onPress={() => call(args).catch(console.error)}
        />
        {/* </View> */}
        </View>
        {/* </View> */}
        <View style={{padding: 20,width:142,backgroundColor:'red',flex:0.4}}>
       <Button style={styles.button}
          color="red"
          title="Ambulance"
          onPress={() => call(args).catch(console.error)}
        />
        </View>
        <View style={{padding: 20,width:125,backgroundColor:'lightblue',flex:0.3}}>
         <Button 
          title="Police"
          color="lightblue"
          onPress={() => call(args).catch(console.error)}
        />
        </View>
        </View>
      </View>
      <View style={{top:-200,width:'50%',alignContent:'center',justifyContent:'center',alignItems:'center'}}>
          <Button onPress={() => {this.props.navigation.navigate('Prof')}} title="Fill your profile here"></Button>
      </View>
      <View style={{flex:0.2,top:100,alignContent:'center',justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity>
        <Image source={require('../Assets/a.jpeg')}/>
      </TouchableOpacity>
      </View>
      <View style={{flex:0.2,top:175}}>
          <SmsScreen />
      </View>
      </View>    
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        paddingBottom: 20,
        flex: 0.4,
        marginTop: 10,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center'
      },
})