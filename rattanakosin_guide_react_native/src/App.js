import React, {Component} from 'react'
import { Button, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import AppBottomNavigator from './config/NavigationTab'

class App extends Component {
    render(){
        return (
            <AppBottomNavigator/>
        )
    }
}

export default App;