import {StyleSheet, Text, View, Pressable} from 'react-native';

export default function Task({ title, onToggle, handleLongPress,status }) {
    return (
        <Pressable
            style={styles.task}
            onLongPress={handleLongPress}
        >
            <View style={styles.leftSection}>
                <Text style={[styles.text, status===true && styles.textDone]}>{title}</Text>
            </View>
            <Pressable onPress={onToggle}>
                <View style={[styles.checkbox, status === true && styles.checked]}>
                    {status===true && <Text style={styles.checked}>✓</Text>}
                </View>
            </Pressable>
        </Pressable>
    );
}

const ACCENT = '#4F8CFF';

const styles = StyleSheet.create({
    task: {
        width: '100%',
        backgroundColor: '#161B22',
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
        borderColor: ACCENT,
        marginLeft: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    checked: {
        backgroundColor: ACCENT,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    text: {
        color: '#E6EDF3',
        fontSize: 16,
        fontWeight: '500',
        flexShrink: 1,
    },
    textDone: {
        color: 'grey',
        textDecorationLine: 'line-through',
        fontWeight: 'normal',
    }
});