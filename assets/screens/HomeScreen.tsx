import { StyleSheet, View, ScrollView, TextInput, Pressable, Text, Alert } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import Task from '../components/task';
import Header from "../components/header";
import FilterBar from "../components/filterButtons";

import { useTheme } from '../theme/ThemeContext';
import { useState } from "react";

export default function HomeScreen({ navigation }) {
    const [tasks, setlistOfTasks] = useState([]);
    const [inputText, setInputText] = useState('');
    const [filterValue, setFilterValue] = useState('all');

    const { theme } = useTheme();
    const insets = useSafeAreaInsets();

    const addTask = () => {
        if (inputText.trim() === "") return;

        setlistOfTasks([
            ...tasks,
            { title: inputText, id: Date.now(), status: false }
        ]);

        setInputText('');
    };

    const removeTask = (id) => {
        Alert.alert(
            "Удалить задачу?",
            "Действительно удалить?",
            [
                { text: 'Нет' },
                {
                    text: 'Да',
                    onPress: () => {
                        setlistOfTasks(tasks.filter((task) => task.id !== id));
                    }
                }
            ]
        );
    };

    const changeStatus = (id) => {
        setlistOfTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, status: !task.status }
                    : task
            )
        );
    };

    let filteredTasks = tasks;

    if (filterValue === 'completed') {
        filteredTasks = tasks.filter(task => task.status);
    }

    if (filterValue === 'uncompleted') {
        filteredTasks = tasks.filter(task => !task.status);
    }

    const bottomMenuHeight = 84 + insets.bottom;
    const filterBarBottom = bottomMenuHeight + 12;
    const scrollBottomSpace = bottomMenuHeight + 70;

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]} edges={['top', 'bottom']}>
            <Header tasks={tasks} onOpenSettings={() => navigation.navigate('Settings')} />

            <ScrollView
                contentContainerStyle={[
                    styles.scrollContent,
                    { paddingBottom: scrollBottomSpace }
                ]}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                {tasks.length === 0 ? (
                    <View style={styles.emptyState}>
                        <Text style={[styles.emptyTitle, { color: theme.text }]}>📭 Пока пусто</Text>
                        <Text style={[styles.emptySubtitle, { color: theme.subtext }]}>
                            Добавьте новую задачу
                        </Text>
                    </View>
                ) : (
                    filteredTasks.map((task) => (
                        <Task
                            key={task.id}
                            title={task.title}
                            status={task.status}
                            onToggle={() => changeStatus(task.id)}
                            handleLongPress={() => removeTask(task.id)}
                        />
                    ))
                )}
            </ScrollView>

            <FilterBar
                filterValue={filterValue}
                setFilterValue={setFilterValue}
                bottomOffset={filterBarBottom}
            />

            <View
                style={[
                    styles.bottomMenu,
                    {
                        backgroundColor: theme.surface,
                        borderColor: theme.border,
                        paddingBottom: insets.bottom + 10
                    }
                ]}
            >
                <View
                    style={[
                        styles.bottomMenuInput,
                        {
                            backgroundColor: theme.input,
                            borderColor: theme.border
                        }
                    ]}
                >
                    <TextInput
                        style={[styles.input, { color: theme.text }]}
                        placeholder="Введите текст..."
                        placeholderTextColor={theme.subtext}
                        onChangeText={setInputText}
                        value={inputText}
                    />
                    <Pressable style={[styles.addButton, { backgroundColor: theme.accent }]} onPress={addTask}>
                        <Text style={styles.addButtonText}>+</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    scrollContent: {
        paddingHorizontal: 20,
        flexGrow: 1,
    },

    emptyState: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },

    emptyTitle: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 6,
    },

    emptySubtitle: {
        fontSize: 16,
        textAlign: 'center',
    },

    bottomMenu: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopWidth: 1,
        paddingTop: 12,
        paddingHorizontal: 20,
    },

    bottomMenuInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 14,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderWidth: 1,
        minHeight: 56,
    },

    input: {
        flex: 1,
        fontSize: 16,
    },

    addButton: {
        marginLeft: 10,
        borderRadius: 10,
        minWidth: 44,
        minHeight: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },

    addButtonText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '700',
        lineHeight: 22,
    }
});