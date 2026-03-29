import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
    return (
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>

            {/* Заголовок */}
            <View style={styles.header}>
                <Text style={styles.title}>Настройки ⚙️</Text>
                <Text style={styles.subtitle}>Настрой приложение под себя</Text>
            </View>

            {/* Контент */}
            <View style={styles.content}>

                {/* Блок темы */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Тема</Text>

                    <Pressable style={styles.option}>
                        <Text style={styles.optionText}>🌙 Тёмная</Text>
                    </Pressable>

                    <Pressable style={styles.option}>
                        <Text style={styles.optionText}>☀️ Светлая</Text>
                    </Pressable>
                </View>

                {/* Блок цвета */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Акцентный цвет</Text>

                    <View style={styles.colorRow}>
                        <View style={[styles.color, { backgroundColor: '#4F8CFF' }]} />
                        <View style={[styles.color, { backgroundColor: '#3FB950' }]} />
                        <View style={[styles.color, { backgroundColor: '#F85149' }]} />
                    </View>
                </View>

                {/* Блок инфы */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>О приложении</Text>
                    <Text style={styles.infoText}>Версия 1.0</Text>
                </View>

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D1117',
    },

    header: {
        paddingHorizontal: 20,
        paddingTop: 10,
        marginBottom: 20,
    },

    title: {
        color: '#E6EDF3',
        fontSize: 28,
        fontWeight: '700',
        marginBottom: 6,
    },

    subtitle: {
        color: '#8B949E',
        fontSize: 14,
    },

    content: {
        paddingHorizontal: 20,
    },

    card: {
        backgroundColor: '#161B22',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#21262D',
    },

    cardTitle: {
        color: '#E6EDF3',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 12,
    },

    option: {
        paddingVertical: 10,
    },

    optionText: {
        color: '#8B949E',
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
        color: '#8B949E',
        fontSize: 14,
    },
});