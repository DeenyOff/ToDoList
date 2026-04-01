import {Pressable, StyleSheet, Text, View} from "react-native";
import {useTheme} from "../theme/ThemeContext";


export default function FilterBar({filterValue, setFilterValue}) {

    const {theme} = useTheme();

    return (
        <View style={styles.filterBar}>
            <View style={[styles.bottomMenuButtons, {backgroundColor: theme.surface, borderColor: theme.border}]}>
                <Pressable
                    style={[
                        styles.menuButton,
                        {
                            backgroundColor:
                                filterValue === 'all'
                                    ? theme.accent
                                    : theme.button
                        }
                    ]}
                    onPress={() => setFilterValue('all')}
                >
                    <Text style={[styles.menuButtonText, filterValue === 'all' && styles.menuButtonTextActive]}>
                        Все
                    </Text>
                </Pressable>

                <Pressable
                    style={[
                        styles.menuButton,
                        {
                            backgroundColor:
                                filterValue === 'completed'
                                    ? theme.success
                                    : theme.button
                        }
                    ]}
                    onPress={() => setFilterValue('completed')}
                >
                    <Text style={[styles.menuButtonText, filterValue === 'completed' && styles.menuButtonTextActive]}>
                        Выполнено
                    </Text>
                </Pressable>

                <Pressable
                    style={[
                        styles.menuButton,
                        {
                            backgroundColor:
                                filterValue === 'uncompleted'
                                    ? theme.danger
                                    : theme.button
                        }
                    ]}
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
        alignItems: 'center',
    },

    menuButtonText: {
        color: '#8B949E',
        fontSize: 13,
    },

    menuButtonTextActive: {
        color: 'white',
        fontWeight: '600',
    }
});