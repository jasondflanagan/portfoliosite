import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { View } from 'react-native';
import Constants from 'expo-constants';
import Recipes from './RecipesComponent';
import Gallery from './GalleryComponent';
import Home from './HomeComponent';
import Coding from './CodingComponent';

const HomeNavigator = createStackNavigator(
    {
        Home: {screen: Home},
    },
    {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: '#5637DD'
        },
        headerTintColor: 'fff',
        headerTitleStyle:{
            color: '#fff'
        }
    }
}
)
const RecipesNavigator = createStackNavigator(
    {
        Recipes: {screen: Recipes}
    },
    {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: '#5637DD'
        },
        headerTintColor: 'fff',
        headerTitleStyle:{
            color: '#fff'
        }
    }
}
)
const CodingNavigator = createStackNavigator(
    {
        Coding: {screen: Coding}
    },
    {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: '#5637DD'
        },
        headerTintColor: 'fff',
        headerTitleStyle:{
            color: '#fff'
        }
    }
}
)
const GalleryNavigator = createStackNavigator(
    {
        Gallery: {screen: Gallery}
    },
    {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: '#5637DD'
        },
        headerTintColor: 'fff',
        headerTitleStyle:{
            color: '#fff'
        }
    }
}
)

const MainNavigator = createDrawerNavigator(
    {
        Home: {screen: HomeNavigator},
        Coding: {screen: CodingNavigator},
        Recipes: {screen: RecipesNavigator},
        Gallery: {screen: GalleryNavigator},
    },
    {
        drawerBackgroundColor: 'CEC8FF'
    }
)

const AppNavigator = createAppContainer(MainNavigator)

class Main extends Component{
    render(){
        return(
            <View style={{
                flex:1,
                paddingTop: Platform.OS === 'ios' ? 0: Constants.statusBarHeight}}>
                <AppNavigator/>
            </View>
        )
    }
}

export default Main