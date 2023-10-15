import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import welcome from './screens/welcome/welcome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigation from './navigation/TabNavigation';
import Detal from './screens/auth/Detal';
import DetailFood from './screens/detail/DetailFood';
import DatHangNgay from './screens/other/DatHangNgay';
import ListCategory from './components/ListData/ListCategory';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={welcome} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='Home' component={TabNavigation} options={{headerShown: false, gestureEnabled: false}}></Stack.Screen>
        <Stack.Screen name='DetalUser' component={Detal} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='Detail_Food' component={DetailFood} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='Dat_Hang' component={DatHangNgay} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='ListCategory' component={ListCategory} options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
