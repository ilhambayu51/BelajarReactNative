import {StyleSheet} from 'react-native';
import {Fonts} from '../../src/utils/Font';

const Styles = StyleSheet.create({
  view: {
    alignItems: 'center',
  },
  view1: {
    width: 350,
    height: 220,
    marginTop: '3%',
    marginBottom: '3%',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 5,
    shadowRadius: 16,
    elevation: 30,
  },
  view2: {
    flexDirection: 'row',
  },
  view3: {
    flexDirection: 'column',
    marginTop: '4%',
    marginLeft: '3%',
  },
  view4: {
    flexDirection: 'column',
    marginTop: '14%',
    marginLeft: '3%',
  },
  view5: {
    marginTop: '-6%',
    marginLeft: '50%',
  },
  img1: {
    width: 130,
    height: 100,
    borderRadius: 10,
    marginTop: '5%',
    marginLeft: '3%',
  },
  text1: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: Fonts.Poppins,
  },
  text2: {
    fontSize: 16,
    color: 'white',
  },
  text3: {
    fontSize: 16,
    color: 'black',
  },
  text4: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text5: {
    fontSize: 16,
    color: 'black',
    marginRight: '29%',
  },

  icon: {
    marginTop: '2%',
    marginLeft: '40%',
  },
  icon2: {
    marginTop: '2%',
    marginLeft: '25%',
  },
  icon3: {
    marginTop: '1%',
    marginLeft: '1%',
  },
  icon4: {
    marginLeft: '6%',
  },
  icon5: {
    marginRight: '6%',
  },
  icon6: {
    marginLeft: '29%',
    color: '#2E26D9',
  },
  btn: {
    width: 110,
    height: 40,
    backgroundColor: '#2E26D9',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      height: 10,
    },
    shadowOpacity: 5,
    shadowRadius: 26,
    elevation: 10,
  },
});
export default Styles;
