import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../theme/ThemeContext";

export default function FilterBar({ filterValue, setFilterValue, bottomOffset = 96 }) {
    const { theme } = useTheme();

    return (
        <View style={[styles.filterBar, { bottom: bottomOffset }]}>
            <View
                style={[
                    styles.bottomMenuButtons,
                    { backgroundColor: theme.surface, borderColor: theme.border }
                ]}
            >
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
                    <Text
                        numberOfLines={1}
                        adjustsFontSizeToFit
                        style={[
                            styles.menuButtonText,
                            { color: filterValue === 'all' ? 'white' : theme.subtext }
                        ]}
                    >
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
                    <Text
                        numberOfLines={1}
                        adjustsFontSizeToFit
                        style={[
                            styles.menuButtonText,
                            { color: filterValue === 'completed' ? 'white' : theme.subtext }
                        ]}
                    >
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
                    <Text
                        numberOfLines={1}
                        adjustsFontSizeToFit
                        style={[
                            styles.menuButtonText,
                            { color: filterValue === 'uncompleted' ? 'white' : theme.subtext }
                        ]}
                    >
                        Не выполнено
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    filterBar: {
        position: 'absolute',
        width: '100%',
        paddingHorizontal: 20,
    },

    bottomMenuButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 12,
        padding: 8,
        borderWidth: 1,
    },

    menuButton: {
        flex: 1,
        marginHorizontal: 4,
        paddingVertical: 10,
        borderRadius: 8,
        minHeight: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },

    menuButtonText: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '600',
    }
});