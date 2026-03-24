import {StyleSheet, View, ScrollView, TextInput, Pressable, Text, Alert} from 'react-native';
import Task from "./assets/components/task";
import {useState} from "react";

export default function App() {
    const [tasks, setlistOfTasks] = useState([])
    const [inputText, setInputText] = useState('')

    // Добавление новой задачи
    const addTask = () => {

        if (inputText.trim() === "") return; // Проверка на пустой массив
        setlistOfTasks([
            ...tasks,
            {title: inputText, id: Date.now(), status: false}

        ]);
        setInputText('');//Очистка поля ввода после добавленного задания
    }

    // Удаление задачи из списка
    const removeTask = (id) => {
        Alert.alert(
            "Удалить задачу?",
            "Действительно удалить?",
            [
                {text: 'Нет'},
                {text: 'Да', onPress: () => {
                        setlistOfTasks(
                            tasks.filter((task) => task.id !== id)
                        )
                    }
                }
            ]
        )
    }

    // Изменение статуса задачи
    const changeStatus = (id) => {
        setlistOfTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    return{
                        ...task,
                        status: !task.status,
                    }
                }
                else {return task}
            })
        )
    }


    const [filterValue, setFilterValue] = useState('all')
    // У меня будет переменная которая будет уже хранить в себе отфильтрованный список.
    let filteredTasks = tasks

    if (filterValue === 'completed') {
        filteredTasks = tasks.filter(task => task.status)
    }

    if (filterValue === 'uncompleted') {
        filteredTasks = tasks.filter(task => !task.status)
    }



    return (
        <View style={styles.container}>

            {/*Список*/}
            <ScrollView contentContainerStyle={styles.scrollContent}>

                {/*Автономный вывод всего списка. Написан в {} так как TSX/JSX не воспринимает js код без скобок*/}
                {/*сначала был tasks, теперь стал filtredTasks т.к мы выводим переменную в которой уже отфильтрованный список*/}
                {filteredTasks.map((task) => (
                    <Task
                        key={task.id}
                        title={task.title}
                        status={task.status}
                        onToggle={() => changeStatus(task.id)}
                        handleLongPress={()=> removeTask(task.id)}
                    />
                ))}

            </ScrollView>

            {/*Нижняя панель*/}
            <View style={styles.bottomMenu}>

                <View style={styles.bottomMenuInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="Введите текст..."
                        placeholderTextColor="#6E7681"
                        onChangeText={setInputText}
                        value={inputText}
                    />
                    <Pressable style={styles.addButton} onPress={addTask} >
                        <Text style={styles.addButtonText}>+</Text>
                    </Pressable>
                </View>

                <View style={styles.bottomMenuButtons}>
                    <Pressable style={[styles.menuButton, styles.menuButtonActive]} onPress={()=> setFilterValue('all')}>
                        <Text style={[styles.menuButtonText, styles.menuButtonTextActive]}> Общий </Text>
                    </Pressable>

                    <Pressable style={styles.menuButton} onPress={()=> setFilterValue('completed')}>
                        <Text style={styles.menuButtonText}>Выполненные</Text>
                    </Pressable>

                    <Pressable style={styles.menuButton} onPress={()=> setFilterValue('uncompleted')}>
                        <Text style={styles.menuButtonText}>Невыполненные</Text>
                    </Pressable>
                </View>

            </View>

        </View>
    );
}

const ACCENT = '#4F8CFF';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D1117',
    },

    scrollContent: {
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 120,
    },

    bottomMenu: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#161B22',
        borderTopWidth: 1,
        borderTopColor: '#21262D',
        paddingVertical: 40,
        paddingHorizontal: 20,
    },

    bottomMenuInput: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0D1117',
        borderRadius: 14,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 40,
        borderWidth: 1,
        borderColor: '#21262D',
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
    },

    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    bottomMenuButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    menuButton: {
        flex: 1,
        marginHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: '#0D1117',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#21262D',
    },

    menuButtonActive: {
        backgroundColor: ACCENT,
        borderColor: ACCENT,
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