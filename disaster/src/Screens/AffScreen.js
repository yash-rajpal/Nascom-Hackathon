import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AffectedScreen from '../Components/AffectedScreen'

import {WebView} from 'react-native-webview';

export default class AffScreen extends Component{
  render(){
  return (
    <View style={{flex:1}}>
        <View style={{flex:0.05,justifyContent:'center'}}>
            <Text style={{fontSize:20,fontWeight:'bold',flex:1,justifyContent:'center',textAlign:'center'}}>Affected Area</Text>
        </View>
        <View style={{flex:0.95}}>
            <AffectedScreen />
        </View>
    </View>
    
  );
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