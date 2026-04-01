import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useTheme } from "./assets/theme/ThemeContext";

import HomeScreen from './assets/screens/HomeScreen';
import SettingsScreen from './assets/screens/SettingsScreen';

type RootStackParamList = {
    Home: undefined;
    Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    const {theme} = useTheme();
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
                            backgroundColor: theme.background,
                        },
                        headerTintColor: theme.text,
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