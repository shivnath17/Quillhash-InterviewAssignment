import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const images = {
	profile: require("../assets/profile.jpg"),
	arrow: require("../assets/arrow.png")
}

export default class Card extends Component{
  render() {
    return (
      <View style={styles.container}>
					<Image
	          source={images.profile}
	          style={styles.profile}
	        />
					<Text style={styles.text1}>Comming Home</Text>
	        <Text style={styles.text2}>Kylie Joger</Text>
	        <Text style={styles.text3}>ROYALITES EARNED: $250</Text>
	        <Text style={styles.text4}>TOKEN HELD: 2200</Text>
					<Image
						source={images.arrow}
						style={styles.arrow}
					/>
		      <View style={styles.zc}>
	        	<Text style={styles.text5}>ZC: 3200</Text>
					</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container:{
		height: 82.94,
    width: 375,
    left: 0,
    backgroundColor: "#000000",
		marginTop:10
	},
  profile: {
		height: 77,
    width: 77,
    top: 3,
    left: 16.83,
    borderRadius: 5
	},
text1: {
    top: 3,
    left: 105.17,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 16,
    color: "rgba(155,155,155,1)"
  },
  text2: {
    top: 22,
    left: 107,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(155,155,155,1)"
  },
  text3: {
    top: 50,
    position: "absolute",
    backgroundColor: "transparent",
    left: "28.53%",
    color: "rgba(252,220,114,1)"
  },
  text4: {
    top: 65,
    position: "absolute",
    backgroundColor: "transparent",
    left: "28.53%",
    color: "rgba(255,255,255,1)"
  },
	arrow: {
		top: 0,
    left: 324,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(155,155,155,1)",
    transform: [
      {
        rotate: "10deg"
      }
    ]
	},
	zc: {
 		height: 34,
    width: 96,
    top: 35,
    left: 291,
    position: "absolute",
    backgroundColor: "rgba(252,220,114,1)",
    borderRadius: 15,
	},
	text5: {
		top:8,
		alignSelf:"center",
	}
});
