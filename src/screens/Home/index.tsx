import React from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native"
import { styles } from "./styles";
export function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>todo</Text>
            <View style={styles.form}>
                <TextInput placeholder="Adicione uma nova tarefa" placeholderTextColor="#808080" style={styles.input}></TextInput>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.taskArea}>
                <View style={styles.taskCounterArea}>
                    <View style={styles.taskBanner}>
                        <Text style={styles.taskBannerText}>Criadas</Text>
                        <Text style={styles.taskBannerCounter}>0</Text>
                    </View>
                    <View style={styles.taskBanner}>
                        <Text style={styles.taskBannerConcludeText}>Concluidas</Text>
                        <Text style={styles.taskBannerCounter}>0</Text>
                    </View>
                </View>
                <View style={styles.hrline}/>
            </View>
            
        </View>
    )
}