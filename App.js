import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/pages/home';
import FilterScreen from './src/pages/filters';
import PreviewScreen from './src/pages/preview';
import LoadingScreen from './src/pages/loading';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store';

const Stack = createNativeStackNavigator();
const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Editour'}}
        />
        <Stack.Screen
          name="Filters"
          component={FilterScreen}
          options={{title: 'Filters'}}
        />
        <Stack.Screen
          name="Preview"
          component={PreviewScreen}
          options={{title: 'Preview'}}
        />
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options = {{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
