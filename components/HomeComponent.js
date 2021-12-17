import React, {Component} from 'react';
import { ScrollView, Text } from 'react-native';
import { defineAnimation } from 'react-native-reanimated';

class Home extends Component{
    constructor(props){
        super(props)
    }
    static navigationOptions = {
        title: 'Home'
    }
    render(){
        return(
            <ScrollView>
            <Text>
                Homepage
            </Text>
            </ScrollView>
        )
    }
}
export default Home