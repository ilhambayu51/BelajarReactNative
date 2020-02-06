import React, {Component} from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './styles';

export default class Restaurant extends Component {
  _onBackButton = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <View>
        <View style={Styles.header}>
          <Icon
            name="angle-left"
            size={22}
            style={Styles.icon4}
            onPress={this._onBackButton}
          />
          <Icon2 name="food" size={22} style={Styles.icon6} />
          <Text style={Styles.text5}>Restaurant</Text>
          <Icon name="navicon" size={18} style={Styles.icon5} />
        </View>
        <ScrollView>
          <View style={Styles.view}>
            <View style={Styles.view1}>
              <View style={Styles.view2}>
                <Image
                  style={Styles.img1}
                  source={require('../../assets/image/madito.jpg')}
                />
                <View style={Styles.view3}>
                  <View style={Styles.view2}>
                    <Text style={Styles.text1}>Madito</Text>
                    <Icon name="heart-o" size={22} style={Styles.icon} />
                  </View>
                  <Text>Italian dishes</Text>
                </View>
              </View>
              <View style={Styles.view4}>
                <Text style={Styles.text3}>average check</Text>
                <View style={Styles.view2}>
                  <Text style={Styles.text4}>200</Text>
                  <Icon name="euro" size={17} style={Styles.icon3} />
                  <View style={Styles.view5}>
                    <TouchableOpacity style={Styles.btn}>
                      <Text style={Styles.text2}>Find a Table</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View style={Styles.view1}>
              <View style={Styles.view2}>
                <Image
                  style={Styles.img1}
                  source={require('../../assets/image/palace.jpg')}
                />
                <View style={Styles.view3}>
                  <View style={Styles.view2}>
                    <Text style={Styles.text1}>Palace</Text>
                    <Icon name="heart-o" size={22} style={Styles.icon} />
                  </View>
                  <Text>Indian dishes</Text>
                </View>
              </View>
              <View style={Styles.view4}>
                <Text style={Styles.text3}>average check</Text>
                <View style={Styles.view2}>
                  <Text style={Styles.text4}>150</Text>
                  <Icon name="euro" size={17} style={Styles.icon3} />
                  <View style={Styles.view5}>
                    <TouchableOpacity style={Styles.btn}>
                      <Text style={Styles.text2}>Find a Table</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View style={Styles.view1}>
              <View style={Styles.view2}>
                <Image
                  style={Styles.img1}
                  source={require('../../assets/image/burger-bar.jpg')}
                />
                <View style={Styles.view3}>
                  <View style={Styles.view2}>
                    <Text style={Styles.text1}>Burger Bar</Text>
                    <Icon name="heart-o" size={22} style={Styles.icon2} />
                  </View>
                  <Text>American dishes</Text>
                </View>
              </View>
              <View style={Styles.view4}>
                <Text style={Styles.text3}>average check</Text>
                <View style={Styles.view2}>
                  <Text style={Styles.text4}>250</Text>
                  <Icon name="euro" size={17} style={Styles.icon3} />
                  <View style={Styles.view5}>
                    <TouchableOpacity style={Styles.btn}>
                      <Text style={Styles.text2}>Find a Table</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
