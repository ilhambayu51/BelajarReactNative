/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';
import Styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';

export default class Home extends Component {
  render() {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={Styles.text1}>Trip Planner</Text>
          <Icon name="search" size={24} />
          <Icon name="heart" size={24} />
        </View>

        <Card style={Styles.Image1}>
          <Image
            style={Styles.Image2}
            source={require('../../assets/image/Beach.jpg')}
          />
        </Card>

        <View style={Styles.view1}>
          <Card style={Styles.Card1}>
            <Icon2 name="aircraft" size={24} />
            <Text>Flights</Text>
          </Card>
          <Card style={Styles.Card2}>
            <Text>Attractions</Text>
          </Card>
          <Card style={Styles.Card2}>
            <Text>Hotel</Text>
          </Card>
        </View>
        <View style={Styles.view2}>
          <Card style={Styles.Card3}>
            <Icon name="car" size={24} />
            <Text>Rental</Text>
          </Card>
          <Card style={Styles.Card4}>
            <Text>Restaurants</Text>
          </Card>
        </View>

        <View style={{padding: 10, marginLeft: 20, marginTop: 30}}>
          <Text style={Styles.text2}>Popular</Text>
          <ScrollView horizontal={true}>
            <Image
              source={require('../../assets/image/netherlands.jpg')}
              style={Styles.Image3}
            />
            <Image
              source={require('../../assets/image/netherlands.jpg')}
              style={Styles.Image3}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
