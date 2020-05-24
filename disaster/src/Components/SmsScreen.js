import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,TextInput,Button,Picker,
  Text,
  StatusBar,
} from 'react-native';
// import GetLocation from 'react-native-get-location'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SendSMS from 'react-native-sms'
export default class SmsScreen extends React.Component{
  state={
    userName:'',
    email:'',
    allergies:'',
    physicalDefects:'',
    bloodGroup:'',
    mobileNumber:'',
    emergencyContact1:'7014374566',
    emergencyContact2:'6303558627',
    name:'',
    age:'',

  }
  componentWillMount(){

  }
  render(){
    return(
      <View style={{flex:1,alignContent:'center',alignSelf:'center',marginHorizontal:15,width:'100%'}}> 
      {/* <Text style={{fontWeight:'bold',fontSize:50}}>Profile</Text>
        <TextInput
        label='Enter User Name'
        placeholder='Enter UserName'
        value={this.state.userName}
        style={{height: 40, borderWidth: 2, margin:10,width:'90%' }}
        onChangeText={text => this.setState({ userName:text })}
      />
      <TextInput
        label='Enter Email-id'
        placeholder='Enter Email-id'
        value={this.state.email}
        style={{height: 40, borderWidth: 2, margin:10,width:'90%',alignContent:'center',alignItems:'center' }}
        onChangeText={text => this.setState({ email:text })}
      />
       <TextInput
        label='Enter age'
        placeholder='Enter age'
        value={this.state.email}
        style={{height: 40, borderWidth: 2, margin:10,width:'90%',alignContent:'center',alignItems:'center' }}
        onChangeText={text => this.setState({ physicalDefects:text })}
      />
       <TextInput
        label='Enter Mobile Number'
        placeholder='Enter Mobile Number'
        value={this.state.mobileNumber}
        style={{height: 40, borderWidth: 2, margin:10,width:'90%',alignContent:'center',alignItems:'center' }}
        onChangeText={text => this.setState({ mobileNumber:text })}
      />
      <Text style={{alignSelf:'center',fontSize:20}}>
        BloodGroup
      </Text>
      <Picker
  selectedValue={this.state.bloodGroup}
  style={{height: 50, width: 100,alignContent:'center',alignSelf:'center'}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({bloodGroup: itemValue})
  }>
  <Picker.Item label="B+" value="B+" />
  <Picker.Item label="B-" value="B-" />
  <Picker.Item label="AB-" value="AB-" />
  <Picker.Item label="O+" value="O+" />
</Picker>
       <TextInput
        label='Enter physical defects if any'
        placeholder='Enter physical defects if any'
        value={this.state.email}
        style={{height: 40, borderWidth: 2, margin:10,width:'90%',alignContent:'center',alignItems:'center' }}
        onChangeText={text => this.setState({ physicalDefects:text })}
      />
       <TextInput
        label='Enter allergies if any'
        placeholder='Enter allergies if any'
        value={this.state.email}
        style={{height: 40, borderWidth: 2, margin:10,width:'90%',alignContent:'center',alignItems:'center' }}
        onChangeText={text => this.setState({ allergies:text })}
      />
       <TextInput
        label='Enter physical defects if any'
        placeholder='Enter physical defects if any'
        value={this.state.email}
        style={{height: 40, borderWidth: 2, margin:10,width:'90%',alignContent:'center',alignItems:'center' }}
        onChangeText={text => this.setState({ physicalDefects:text })}
      />
      
      <Text style={{paddingHorizontal:15,marginTop:10}}>
        Enter the Emergeny Contact details, to send SOS messages in case of a disaster.
      </Text>
      <TextInput
        label='Enter Emergency Contact'
        placeholder='Enter Emergency Contact'
        value={this.state.email}
        style={{height: 40, borderWidth: 2, margin:10,width:'90%',alignContent:'center',alignItems:'center' }}
        onChangeText={text => this.setState({ emergencyContact1:text })}
      />
      <TextInput
        label='Enter Emergency Contact'
        placeholder='Enter Emergency Contact'
        value={this.state.email}
        style={{height: 40, borderWidth: 2, margin:10,width:'90%',alignContent:'center',alignItems:'center' }}
        onChangeText={text => this.setState({ emergencyContact2:text })}
/> */}
<Button
title="Send SOS message"
onPress={()=>{
  SendSMS.send({
    body: 'This is Yash, I am stuck in a disaster, Please come and save me, my geo location is- lattitude:-13.072090 and longitude is -80.201859',
    recipients: [this.state.emergencyContact1, this.state.emergencyContact2],
    successTypes: ['sent', 'queued'],
    allowAndroidSendWithoutReadPermission: true
}, (completed, cancelled, error) => {

    console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);

});
}}
/>
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});