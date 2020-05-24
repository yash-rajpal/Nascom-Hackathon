import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import Iconicons from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import HomeScreen from './src/Screens/HomeScreen'
import Funding from './src/Components/Funding'
import SosScreen from './src/Screens/SosScreen'
import FundingScreen from './src/Screens/FindingScreen'
import AffectedScreen from './src/Screens/AffScreen'
import MissingScreen from './src/Screens/MissingScreen'
import ProfileScreen from './src/Screens/ProfileScreen'

const TabNavigator = createBottomTabNavigator({
  SosScreen: SosScreen,
  Events: HomeScreen,
  MissingScreen: MissingScreen,
  Fund: FundingScreen,
  contactscreen: AffectedScreen,
},
{
  initialRouteName : 'SosScreen',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Iconicons;
      let iconName;
      if (routeName === 'SosScreen') {
        // iconName =  'ios-calender';
        return (
          <Text>Home</Text>
        );
      } else if (routeName === 'Events') {
        // iconName = 'ios-calendar';
        return(
          <Text>Hospitals</Text>
        );
      }else if (routeName === 'MissingScreen') {
        return(
          <Text>Missing</Text>
        );
        // iconName = 'ios-calendar';}
      }
      else if (routeName === 'Fund') {
        // iconName = 'ios-people';
        return (
          <Text>Fundings</Text>
        );
      }else if (routeName === 'contactscreen') {
        // iconName = 'ios-call';
        return (
          <Text>Affected</Text>
        );
      }

      // You can return any component that you like here!
      // return <IconComponent name={iconName} size={25} color={tintColor} />;
      // return iconName;
    },
  }),
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
    },
    showLabel: false,
    activeTintColor: '#003D5F', // active icon color
    inactiveTintColor: '#001f30',  // inactive icon color
    style: {
        backgroundColor: 'white', // TabBar background
        borderTopColor: 'white',
    }
  }
});


// const TabNavigator = createBottomTabNavigator(  
//   {  
//     Home:{  
//       screen:HomeScreen,  
//       navigationOptions:{  
//         tabBarLabel:'Home',  
//         tabBarIcon:({tintColor})=>(  
//             <Icon name="ios-home" color={tintColor} size={25}/>  
//         )  
//       }  
//     },  
//     Profile: {  
//       screen:HomeScreen,  
//       navigationOptions:{  
//         tabBarLabel:'Profile',  
//         tabBarIcon:({tintColor})=>(  
//             <Icon name="ios-person" color={tintColor} size={25}/>  
//         )  
//       }  
//     },
//   },  
//   {  
//     initialRouteName: "Home"  
//   },  
// );  

const AppStackNav = createStackNavigator({
    tabs:{
      screen:TabNavigator,
      navigationOptions: {
        headerStyle: {
          elevation: 0,       // remove shadow on Android
          shadowOpacity: 0,
          borderColor: '#F4EEEC',
          // backgroundColor: 'black',
          height:0
        },
      }
    },
    Prof:{
      screen:ProfileScreen,
      navigationOptions: {
        headerStyle: {
          elevation: 0,       // remove shadow on Android
          shadowOpacity: 0,
          borderColor: '#F4EEEC',
          // backgroundColor: 'black',
          height:0
        },
      }
    }
  },
  {
    headerTitleAlign:'center'
  }
);

TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  const title = "";
  const headerTitleStyle = {
    flex:1,
    fontWeight: 'bold',
    fontSize: 17,
    color:'#333333',
    textAlign: 'center',
  };
  
  return {
    title,headerTitleStyle,
  }; 

};
const AppBottomContainer  = createSwitchNavigator(
{
  AppStackNav: AppStackNav,
},
);
const AppContainer = createAppContainer(AppBottomContainer);


export default class App extends React.Component {
  render() {
    return (
          <View style={{flex:1}}>
            <AppContainer />
          </View>
    );
  }
}