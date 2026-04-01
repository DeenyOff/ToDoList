import {StyleSheet, Text, View, Pressable} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useTheme} from "../theme/ThemeContext";

export default function Task({ title, onToggle, handleLongPress,status }) {

    const {theme} = useTheme();

    return (
        <Pressable
            style={[styles.task, {backgroundColor: theme.card, borderColor: theme.border}]}
            onLongPress={handleLongPress}
        >
            <View style={styles.leftSection}>
                <Text
                    style={[
                        styles.text,
                        {
                            color: status ? theme.subtext : theme.text,
                            opacity: status ? 0.7 : 1
                        },
                        status && styles.textDone
                    ]}
                >
                    {title}
                </Text>
            </View>
            <Pressable
                onPress={onToggle}
                style={[
                    styles.checkbox,
                    {
                        borderColor: theme.accent,
                        backgroundColor: status ? theme.accent : theme.card,
                    }
                ]}>
                <Ionicons name="checkmark" size={24} color={status ? 'white' : 'transparent'} />
            </Pressable>
        </Pressable>
    );
}


const styles = StyleSheet.create({
    task: {
        width: '100%',
        borderRadius: 16,
        marginBottom: 12,
        paddingVertical: 30,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#21262D',
    },

    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        flex: 1,
    },

    checkbox: {
        width: 27,
        height: 27,
        borderRadius: 6,
        borderWidth: 2,
        marginLeft: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    checked: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    text: {
        fontSize: 16,
        fontWeight: '500',
        flexShrink: 1,
    },
    textDone: {
        textDecorationLine: 'line-through',
        fontWeight: 'normal',
    }
});