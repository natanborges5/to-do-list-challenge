import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, FlatList, Image} from "react-native"
import { styles } from "./styles";
import { Task } from "../../components/Task";
export function Home(){
    type taskType = {
        name: string;
        id: string,
        done: boolean,
    }
    const [tasks, setTasks] = useState<taskType[]>([])
    const [taskName, setTaskName] = useState("")
    function handleTaskAdd(){
        const addNewTask = [
            ...tasks,
            {
                name: taskName,
                id: (tasks.length + 1).toString(),
                done: false,
            },
        ]
        setTasks(addNewTask)
        setTaskName("")
    }
    function handleTaskRemove(id:string){
        setTasks(prevState => prevState.filter(task => task.id !== id))
    }
    function handleTaskDone(taskProp: taskType){
        if(taskProp.done == false){
            taskProp.done = true
        }else taskProp.done = false
        const updatedObject = tasks.map((task) =>
            task.id === taskProp.id ? taskProp : task
        );
        setTasks(updatedObject)
    }
    return(
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Image style={styles.tinyLogo} source={require("../../../assets/logo.png")}/>
                <Text style={styles.title1}>to</Text>
                <Text style={styles.title2}>do</Text>
            </View>
            
            <View style={styles.form}>
                <TextInput placeholder="Adicione uma nova tarefa" placeholderTextColor="#808080" style={styles.input} onChangeText={setTaskName} value={taskName}></TextInput>
                <TouchableOpacity style={styles.addButton} onPress={handleTaskAdd}>
                    <Image source={require("../../../assets/create.png")}/>
                </TouchableOpacity>
            </View>
            <View style={styles.taskArea}>
                <View style={styles.taskCounterArea}>
                    <View style={styles.taskBanner}>
                        <Text style={styles.taskBannerText}>Criadas</Text>
                        <Text style={styles.taskBannerCounter}>{tasks.filter(teste => teste.done == false).length}</Text>
                    </View>
                    <View style={styles.taskBanner}>
                        <Text style={styles.taskBannerConcludeText}>Concluidas</Text>
                        <Text style={styles.taskBannerCounter}>{tasks.filter(teste => teste.done == true).length}</Text>
                    </View>
                </View>
                <View style={styles.hrline}/>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={tasks}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <Task key={item.id} name={item.name} id={item.id} done={item.done} onRemove={() => handleTaskRemove(item.id)} onConclude={() => handleTaskDone(item)}/>
                    )}
                    ListEmptyComponent={() => (
                        <View>
                            <Image style={styles.listEmptyImage} source={require("../../../assets/Clipboard.png")}/>
                            <Text style={[styles.listEmptyText , {fontWeight: "bold"}]}>
                                Você ainda não tem tarefas cadastradas.
                            </Text>
                            <Text style={styles.listEmptyText}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    )}
                />
            </View>         
        </View>
    )
}