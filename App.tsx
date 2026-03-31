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
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
                <Stack.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        title: 'Настройки',
                        headerStyle: {
                            backgroundColor: '#161B22',
                        },
                        headerTintColor: '#E6EDF3',
                        headerTitleStyle: {
                            fontWeight: '700',
                        },
                        headerShadowVisible: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}