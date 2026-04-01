// React Компоненты
import { StyleSheet, View, ScrollView, TextInput, Pressable, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Компоненты
import Task from '../components/task';
import Header from "../components/header";
import FilterBar from "../components/filterButtons";

// Темы
import { useTheme } from '../theme/ThemeContext';

import { useState } from "react";



export default function HomeScreen({navigation}) {
    const [tasks, setlistOfTasks] = useState([]); //Динамический список задач + метод его изменения
    const [inputText, setInputText] = useState(''); //inputTask хранит в себе введенную задачу + setInputText для ее изменения
    const [filterValue, setFilterValue] = useState('all'); // Для хранения состояния переменной filter чтобы фильтровать список при помощи кнопок
    const {theme}  = useTheme();


    // Добавление новой задачи
    const addTask = () => {
        if (inputText.trim() === "") return;

        setlistOfTasks([
            ...tasks,
            { title: inputText, id: Date.now(), status: false }
        ]);

        setInputText('');
    };

    // Удаление задачи из списка
    const removeTask = (id) => {
        Alert.alert(
            "Удалить задачу?",
            "Действительно удалить?",
            [
                { text: 'Нет' },
                {
                    text: 'Да',
                    onPress: () => {
                        setlistOfTasks(
                            tasks.filter((task) => task.id !== id)
                        );
                    }
                }
            ]
        );
    };

    // Изменение статуса задачи
    const changeStatus = (id) => {
        setlistOfTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        status: !task.status,
                    };
                } else {
                    return task;
                }
            })
        );
    };

    // Отфильтрованный список
    let filteredTasks = tasks;

    if (filterValue === 'completed') {
        filteredTasks = tasks.filter(task => task.status);
    }

    if (filterValue === 'uncompleted') {
        filteredTasks = tasks.filter(task => !task.status);
    }

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: theme.background}]} edges={['top']}>
            <Header tasks={tasks} onOpenSettings={()=> navigation.navigate('Settings')}/>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {tasks.length === 0 ? (
                    <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
                        <Text style={{color: theme.text, fontSize: 20}}>📭 Пока пусто</Text>
                        <Text style={{color: theme.text, fontSize: 20}}>Добавьте новую задачу✍️</Text>
                    </View>
                ) : ( filteredTasks.map((task) => (
                    <Task
                        key={task.id}
                        title={task.title}
                        status={task.status}
                        onToggle={() => changeStatus(task.id)}
                        handleLongPress={() => removeTask(task.id)}
                    />
                )))}
            </ScrollView>

            {/* Панель фильтров */}
            <FilterBar
                filterValue={filterValue}
                setFilterValue={setFilterValue}
            />

            {/* Нижняя панель */}
            <View style={[styles.bottomMenu, {backgroundColor: theme.surface, borderColor: theme.border}]}>
                <View style={[styles.bottomMenuInput, {backgroundColor: theme.input, borderColor: theme.border}]}>
                    <TextInput
                        style={styles.input}
                        placeholder="Введите текст..."
                        placeholderTextColor="#6E7681"
                        onChangeText={setInputText}
                        value={inputText}
                    />
                    <Pressable style={styles.addButton} onPress={addTask}>
                        <Text>+</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}

const ACCENT = '#4F8CFF';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: theme.background,
    },

    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 220,
        flexGrow: 1,
    },

    bottomMenu: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopWidth: 1,
        paddingTop: 16,
        paddingBottom: 16,
        paddingHorizontal: 20,
    },

    bottomMenuInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 14,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderWidth: 1,
    },

    input: {
        flex: 1,
        color: '#E6EDF3',
        fontSize: 16,
    },

    addButton: {
        marginLeft: 10,
        backgroundColor: ACCENT,
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 6,
    }
});