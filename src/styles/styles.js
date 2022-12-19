import {StyleSheet, useWindowDimensions, Dimensions} from 'react-native';
const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 50,
    width: 200,
    borderColor:'black',
    borderWidth:3,
    margin:3,
  },
  buttonTextStyle:{
    color:'black',
    fontSize:16,
    fontWeight:'600',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
  },
  topVideo: {
    flex: 1,
    width: Dimensions.get('window').width,
    backgroundColor: 'black',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  item:{
    backgroundColor:'black',
    padding:20,
    marginVertical:8,
    marginHorizontal:16,
  },
  itemTitle:{
    fontSize:32,
    color:'white',
  }
});
export default styles;
