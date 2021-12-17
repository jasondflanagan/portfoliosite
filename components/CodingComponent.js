import React, {Component} from 'react';
import { ScrollView, Text } from 'react-native';


class Coding extends Component{
    constructor(props){
        super(props)
    }
    static navigationOptions = {
        title: 'Coding'
    }
    render(){
        return(
            <ScrollView>
            <Text>
                CodingPage
            </Text>
            </ScrollView>
        )
    }
}
export default Coding