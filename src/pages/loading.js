import {ActivityIndicator, View, Text} from 'react-native';
import styles from '../styles/styles';
const LoadingScreen = () => {
    return(
        <View style={styles.container}>
         <ActivityIndicator size='large' color="black"/>
         <Text>please wait</Text>
        </View>
         )
}
export default LoadingScreen;