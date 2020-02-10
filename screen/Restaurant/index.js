import React, {Component} from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './styles';

export default class Restaurant extends Component {
  render() {
    return (
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
                <Text style={Styles.text3}>Italian dishes</Text>
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
                <Text style={Styles.text3}>Indian dishes</Text>
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
                <Text style={Styles.text3}>American dishes</Text>
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
    );
  }
}
