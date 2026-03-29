import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './assets/screens/HomeScreen';
import SettingsScreen from './assets/screens/SettingsScreen';

type RootStackParamList = {
    Home: undefined;
    Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}