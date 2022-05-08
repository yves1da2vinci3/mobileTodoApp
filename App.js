
import {NavigationContainer} from '@react-navigation/native'
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import TodoScreen from './screens/TodoScreen';
import ModalScreen from './screens/ModalScreen';
import VisualTodoScreen from './screens/VisualTodoScreen';
import AddTodoScreen from './screens/AddTodoScreen';
import { createStackNavigator} from '@react-navigation/stack'
import { ToastProvider } from 'react-native-toast-notifications'
import AuthUserProvider from './context/UserContext'
export default function App() {
  const Stack = createStackNavigator();

  return (
<AuthUserProvider>
  <NavigationContainer>
<ToastProvider>
    <Stack.Navigator>
    
      <Stack.Screen name='login' component={LoginScreen}   />
      <Stack.Screen options={{headerLeftLabelVisible : false}} name='home' component={HomeScreen}  />
      <Stack.Group screenOptions={ { presentation : 'transparentModal' }}>
      <Stack.Screen name='todo' component={TodoScreen}  />
      <Stack.Screen options={ { headerShown : false}} name='see' component={VisualTodoScreen}  />
      <Stack.Screen options={ { headerShown : false}} name='add' component={AddTodoScreen}  />
      </Stack.Group>
      <Stack.Group screenOptions={ { presentation : 'transparentModal' }}>
      <Stack.Screen name='modal' component={ModalScreen} options={ { headerShown : false}}   />
      </Stack.Group>
 
    </Stack.Navigator>
    </ToastProvider>
  </NavigationContainer>
  </AuthUserProvider>
  );
}

