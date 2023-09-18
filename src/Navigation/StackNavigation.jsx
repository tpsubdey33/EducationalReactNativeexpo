import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SingUpScreen from '../Screens/SingUpScreen';
import HomeScreen from '../Screens/HomeScreen';
import CourseDetailsScreen from '../Screens/CourseDetailsScreen';
import CourseDAScreen from '../Screens/CourseDAScreen';

const Stack = createStackNavigator();

const StackNavigation =()=> {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SingUpScreen' screenOptions={{
                headerShown:false
            }}>
                <Stack.Screen name='SingUp' component={SingUpScreen} />
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='course-details' component={CourseDetailsScreen} />
                <Stack.Screen name='course-advanced' component={CourseDAScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );

};
export default StackNavigation;