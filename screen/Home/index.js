/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';
import Styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Home extends Component {
  _onPressButton = () => {
    this.props.navigation.navigate('Restaurant');
  };
  render() {
    return (
      <ScrollView style={{backgroundColor: '#ffffff'}}>
        <View style={Styles.view3}>
          <View style={{flexDirection: 'row'}}>
            <Text style={Styles.text1}>Trip Planner</Text>
            <Icon name="search" size={24} style={Styles.icon6} />
            <Icon name="heart-o" size={24} style={Styles.icon7} />
          </View>

          <View style={Styles.Image1}>
            <Image
              style={Styles.Image2}
              source={require('../../assets/image/Beach.jpg')}
            />
          </View>

          <View style={Styles.view1}>
            <Card style={Styles.Card1}>
              <Icon2 name="aircraft" size={24} style={Styles.icon} />
              <Text>Flights</Text>
            </Card>
            <Card style={Styles.Card2}>
              <Icon name="building-o" size={26} style={Styles.icon2} />
              <Text>Attractions</Text>
            </Card>
            <Card style={Styles.Card2}>
              <Icon name="hotel" size={26} style={Styles.icon3} />
              <Text>Hotel</Text>
            </Card>
          </View>
          <View style={Styles.view2}>
            <Card style={Styles.Card3}>
              <Icon name="car" size={24} style={Styles.icon4} />
              <Text>Rental</Text>
            </Card>
            <Card style={Styles.Card4} onPress={this._onPressButton}>
              <Icon3 name="food" size={30} style={Styles.icon5} />
              <Text>Restaurants</Text>
            </Card>
          </View>

          <View style={{padding: 10, marginLeft: 20, marginTop: 30}}>
            <Text style={Styles.text2}>Popular</Text>
            <ScrollView horizontal={true}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../../assets/image/netherlands.jpg')}
                    style={Styles.Image3}
                  />
                  <Card style={Styles.Card5}>
                    <Icon name="heart-o" size={27} style={Styles.icon9} />
                  </Card>
                </View>
                <View>
                  <Card style={Styles.Toucable1}>
                    <Text style={Styles.text3}>Netherlands</Text>
                    <Text style={Styles.text4}>200</Text>
                    <Icon name="euro" size={18} style={Styles.icon8} />
                  </Card>
                </View>
              </View>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../../assets/image/netherlands.jpg')}
                    style={Styles.Image3}
                  />
                  <Card style={Styles.Card5}>
                    <Icon name="heart-o" size={27} style={Styles.icon9} />
                  </Card>
                </View>
                <Card style={Styles.Toucable1}>
                  <Text style={Styles.text3}>Netherlands</Text>
                  <Text style={Styles.text4}>200</Text>
                  <Icon name="euro" size={18} style={Styles.icon8} />
                </Card>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    );
  }
}
