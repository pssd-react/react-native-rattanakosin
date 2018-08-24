import React, {Component} from 'react'
import {
    View,
    Text, 
    StyleSheet,
    TouchableOpacity} from 'react-native'
import I18n from './../../config/i18n'

const INITIAL_STATE = {
    languages: [],
    value: false,
    langValue: "en",
    select: "Select Language"
}
const language = [
    {lang: "English", code: "en"},
    {lang: "Thai", code: "th"}
]
class HomeScreen extends Component{
    state = INITIAL_STATE;
    constructor(){
        super()
        this.onLanguage=this.onLanguage.bind(this);
    }
    onSelectLanguage() {
        return(
          language.map((data, i)=>{
            return (
               <View key={i} style={styles.dropDownView}>
                 <TouchableOpacity onPress={()=>this.onSelectedLang(data)}>
                   <Text style={styles.dropDownText}>{data.lang}</Text>
                 </TouchableOpacity>
               </View>
            )
          })
        )
      }
      onSelectedLang(text) {
        this.setState({
          value: false,
          select: text.lang,
        }),
        I18n.locale = text.code;
      }
      onLanguage() {
        this.setState({
          value: true,
        })
      }
    render(){
        return (
            <View style={styles.container}>
            <Text style={styles.mainTitle}>React-native langauge translation example</Text>
            <View style={styles.subContainer}>
              <View style={styles.block}>
                <Text style={styles.title}></Text>
                <Text style={styles.textStyle}>{I18n.t('greeting')}</Text>
              </View>
              <View>
                <TouchableOpacity onPress={this.onLanguage}>
                  <View style={styles.buttonView}>
                    <Text style={styles.buttontext}>{this.state.select}</Text>
                  </View>
               </TouchableOpacity>
               <View>
                {(this.state.value) ? this.onSelectLanguage() : null}
               </View>
            </View>
         </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        padding: 24,
      },
      subContainer: {
        flexDirection: "row",
      },
      mainTitle: {
        color: "#3b5998",
        fontSize: 30,
        marginBottom: 20,
        fontWeight: "bold",
      },
      title: {
        fontSize: 20,
        fontWeight: '700',
      },
      buttonView: {
        backgroundColor: "#3b5998",
        padding: 10,
      },
      block: {
        width: 230,
      },
      textStyle: {
        marginTop: 10,
      },
      buttontext: {
        color: "#fff",
      },
      dropDownView: {
        backgroundColor: "#8b9dc3",
        padding: 10,
      },
      dropDownText: {
        paddingTop: 2,
        color: "#fff",
      }
})

export default HomeScreen