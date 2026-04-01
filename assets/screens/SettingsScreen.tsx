import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from "../theme/ThemeContext";


export default function SettingsScreen() {
    const { theme, themeMode, setThemeMode } = useTheme();

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background}]} edges={['top', 'bottom']}>

            {/* Заголовок */}
            <View style={styles.header}>
                <Text style={[styles.title, {color: theme.text}]}>Настройки ⚙️</Text>
                <Text style={[styles.subtitle, {color: theme.subtext}]}>Настрой приложение под себя</Text>
            </View>

            {/* Контент */}
            <View style={styles.content}>

                {/* Блок темы */}
                <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
                    <Text style={[styles.cardTitle, {color: theme.text}]}>Тема</Text>

                    <Pressable style={styles.option} onPress={() => setThemeMode('dark')}>
                        <View style={styles.toggleContainer}>
                            <Text style={[styles.optionText, {color: theme.subtext}]}>🌙 Тёмная</Text>
                            <View style={[
                                styles.toggleCircle,
                                {
                                    borderColor: theme.accent,
                                    backgroundColor: themeMode === 'dark' ? theme.accent : 'transparent',
                                }
                            ]}></View>
                        </View>

                    </Pressable>

                    <Pressable style={styles.option} onPress={() => setThemeMode('light')}>
                        <View style={styles.toggleContainer}>
                            <Text style={[styles.optionText, {color: theme.subtext}]}>☀️ Светлая</Text>
                            <View style={[
                                styles.toggleCircle,
                                {
                                    borderColor: theme.accent,
                                    backgroundColor: themeMode === 'light' ? theme.accent : 'transparent',
                                }
                            ]}></View>
                        </View>
                    </Pressable>
                </View>

                {/* Блок цвета */}
                <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
                    <Text style={[styles.cardTitle, {color: theme.text}]}>Акцентный цвет</Text>

                    <View style={styles.colorRow}>
                        <View style={[styles.color, { backgroundColor: '#4F8CFF' }]} />
                        <View style={[styles.color, { backgroundColor: '#3FB950' }]} />
                        <View style={[styles.color, { backgroundColor: '#F85149' }]} />
                    </View>
                </View>

                {/* Блок инфы */}
                <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
                    <Text style={[styles.cardTitle, {color: theme.text}]}>О приложении</Text>
                    <Text style={[styles.infoText, {color: theme.subtext}]}>Версия 1.2</Text>
                </View>

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        paddingHorizontal: 20,
        paddingTop: 10,
        marginBottom: 20,
    },

    title: {
        fontSize: 28,
        fontWeight: '700',
        marginBottom: 6,
    },

    subtitle: {
        fontSize: 14,
    },

    content: {
        paddingHorizontal: 20,
    },

    card: {
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
    },

    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 12,
    },

    option: {
        paddingVertical: 10,
    },

    optionText: {
        fontSize: 15,
    },

    colorRow: {
        flexDirection: 'row',
        gap: 10,
    },

    color: {
        width: 30,
        height: 30,
        borderRadius: 8,
    },

    infoText: {
        fontSize: 14,
    },

    toggleContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    toggleCircle: {
        width: 26,
        height: 26,
        borderWidth: 1,
        borderRadius: 6,
    }
});