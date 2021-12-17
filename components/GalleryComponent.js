import React, {Component} from 'react';
import { ScrollView, Text } from 'react-native';


class Gallery extends Component{
    constructor(props){
        super(props)
    }
    static navigationOptions = {
        title: 'Gallery'
    }
    render(){
        return(
            <ScrollView>
            <Text>
                GalleryPage
            </Text>
            </ScrollView>
        )
    }
}
export default Gallery