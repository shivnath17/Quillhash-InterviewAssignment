import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from "./src/components/Header"
import Card from "./src/components/Card"

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
				<View style={{height:70}}>
					<Header />
				</View>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
