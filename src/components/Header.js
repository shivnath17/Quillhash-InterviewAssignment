import React, {Component} from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';

const images = {
	dropdown: require("../assets/dropdown.png")
}
export default class Header extends Component{
  render() {
    return (
      <View>
          <Text style={styles.heading}>PORTFPLIO</Text>
          <View style={styles.line} />
					<Image style={styles.icon} source={images.dropdown}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
		top:15,
    backgroundColor: "transparent",
    color: "rgba(252,220,114,1)",
		fontSize:20,
    alignSelf: 'center',
  },
	line: {
		top:30,
	 	height: 1,
    width: 400,
    backgroundColor: "rgba(252,220,114,1)",
	},
	icon: {
    top: 7,
    left: 335,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(155,155,155,1)",
  },
});
