import { registerRootComponent } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './assets/theme/ThemeContext';
import App from './App';

function Root() {
    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </SafeAreaProvider>
    );
}

registerRootComponent(Root);