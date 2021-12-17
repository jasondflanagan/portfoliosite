import React, {Component} from 'react';
import { ScrollView, Text } from 'react-native';


class Recipes extends Component{
    constructor(props){
        super(props)
    }
    static navigationOptions = {
        title: 'Recipes'
    }
    render(){
        return(
            <ScrollView>
            <Text>
                RecipesPage
            </Text>
            </ScrollView>
        )
    }
}
export default Recipes