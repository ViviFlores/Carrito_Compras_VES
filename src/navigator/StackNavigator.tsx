import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { PRIMARY_COLOR } from '../commons/constantsColor';

const Stack = createStackNavigator();

export const StackNavigator=()=> {
  return (
    <Stack.Navigator screenOptions={{
        cardStyle:{
            backgroundColor:PRIMARY_COLOR
        }
    }}>
      <Stack.Screen name="LoginScreen" options={{headerShown:false}} component={LoginScreen} />
    </Stack.Navigator>
  );
}