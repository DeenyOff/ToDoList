import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Entypo, FontAwesome6, Octicons } from '@expo/vector-icons';

export default function Header({ tasks }) {
    const completed = tasks.filter(task => task.status).length;

    return (
        <View style={styles.container}>

            {/* Верхнее меню */}
            <View>
                {/* Заголовок */}
                <Text style={styles.title}>Список задач</Text>

                {/* Подзаголовок (чуть UX) */}
                <Text style={styles.subtitle}>
                    {completed} выполнено из {tasks.length}
                </Text>
            </View>

            <View style={styles.headerMenu}>

                <Pressable style={styles.iconBtn}>
                    <Octicons name="search" size={20} color="#8B949E" />
                </Pressable>

                <Pressable style={styles.iconBtn}>
                    <FontAwesome6 name="folder-plus" size={20} color="#8B949E" />
                </Pressable>

                <Pressable style={styles.iconBtn}>
                    <Entypo name="dots-three-horizontal" size={20} color="#8B949E" />
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
        marginBottom: 20,
    },

    iconBtn: {
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 8,
        backgroundColor: '#161B22',
    },

    title: {
        color: "#E6EDF3",
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 6,
    },

    subtitle: {
        color: "#8B949E",
        fontSize: 14,
    },
});