import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Entypo, FontAwesome6, Octicons } from '@expo/vector-icons';
import {useTheme} from "../theme/ThemeContext";

export default function Header({ tasks, onOpenSettings  }) {

    const { theme } = useTheme();

    const completed = tasks.filter(task => task.status).length;

    return (
        <View style={styles.container}>

            {/* Верхнее меню */}
            <View>
                {/* Заголовок */}
                <Text style={[styles.title, {color: theme.text}]}>Список задач</Text>

                {/* Подзаголовок (чуть UX) */}
                <Text style={[styles.subtitle, {color: theme.subtext}]}>
                    {completed} выполнено из {tasks.length}
                </Text>
            </View>

            <View style={styles.headerMenu}>

                <Pressable style={[styles.iconBtn, {backgroundColor: theme.surface}]}>
                    <Octicons name="search" size={20} color={theme.icon} />
                </Pressable>

                <Pressable style={[styles.iconBtn, {backgroundColor: theme.surface}]}>
                    <FontAwesome6 name="folder-plus" size={20} color={theme.icon} />
                </Pressable>

                <Pressable style={[styles.iconBtn, {backgroundColor: theme.surface}]} onPress={onOpenSettings}>
                    <Entypo name="dots-three-horizontal" size={20} color={theme.icon} />
                </Pressable>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    headerMenu: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },

    iconBtn: {
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 8,
    },

    title: {
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 6,
    },

    subtitle: {
        fontSize: 14,
    },
});