import {Pressable, StyleSheet, Text, View} from "react-native";


export default function FilterBar({filterValue, setFilterValue}) {
    return (
        <View style={styles.filterBar}>
            <View style={styles.bottomMenuButtons}>
                <Pressable
                    style={[styles.menuButton, filterValue === 'all' && styles.menuButtonAll]}
                    onPress={() => setFilterValue('all')}
                >
                    <Text style={[styles.menuButtonText, filterValue === 'all' && styles.menuButtonTextActive]}>
                        Все
                    </Text>
                </Pressable>

                <Pressable
                    style={[styles.menuButton, filterValue === 'completed' && styles.menuButtonCompleted]}
                    onPress={() => setFilterValue('completed')}
                >
                    <Text style={[styles.menuButtonText, filterValue === 'completed' && styles.menuButtonTextActive]}>
                        Выполнено
                    </Text>
                </Pressable>

                <Pressable
                    style={[styles.menuButton, filterValue === 'uncompleted' && styles.menuButtonUncompleted]}
                    onPress={() => setFilterValue('uncompleted')}
                >
                    <Text style={[styles.menuButtonText, filterValue === 'uncompleted' && styles.menuButtonTextActive]}>
                        Не выполнено
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}
const ACCENT = '#4F8CFF';
const styles = StyleSheet.create({

    filterBar: {
        position: 'absolute',
        bottom: 90,
        width: '100%',
        paddingHorizontal: 20,
    },

    bottomMenuButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#161B22',
        borderRadius: 10,
        padding: 8,
        borderWidth: 1,
        borderColor: '#21262D',
    },

    menuButton: {
        width: '30%',
        flex: 1,
        marginHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 6,
        backgroundColor: '#0D1117',
        alignItems: 'center',
        borderColor: '#21262D',
    },

    menuButtonAll: {
        backgroundColor: ACCENT,
        borderColor: ACCENT,
    },

    menuButtonCompleted: {
        backgroundColor: '#3FB950',
        borderColor: '#3FB950',
    },

    menuButtonUncompleted: {
        backgroundColor: '#F85149',
        borderColor: '#F85149',
    },

    menuButtonText: {
        color: '#8B949E',
        fontSize: 13,
    },

    menuButtonTextActive: {
        color: '#fff',
        fontWeight: '600',
    }
});