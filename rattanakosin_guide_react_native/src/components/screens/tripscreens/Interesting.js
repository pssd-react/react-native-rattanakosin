import React, {Component} from 'react'
import {
    View,
    Text, 
    StyleSheet,
    Image
    } from 'react-native'
import { Card , CardSection, TripImg } from '../../common'
export class Interesting extends Component{
  

    render(){
        return (
            <Card style = {styles.container}>
                <CardSection>
                    <View>
                       <TripImg />
                    </View>
                </CardSection>
                <View style={styles.container}>
                        
                </View>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'white',
    },
    text:{
        textAlign:'center',
        fontSize : 20
    }
})


