import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#333333",
        borderRadius: 3,
        borderColor: "#F2F2F2",
        borderWidth: 0.1,
        alignItems: "center",
        marginBottom: 10,
        
    },
    taskText: {
        color: "#F2F2F2",
        fontSize: 14,
        textAlign: "center",
        textAlignVertical: "center",
        flexWrap: "wrap",
        height: "100%",
        width: "86%",
    },
    taskTextDone: {
        color: "#808080",
        fontSize: 14,
        textAlign: "center",
        textAlignVertical: "center",
        flexWrap: "wrap",
        height: "100%",
        width: "86%",
        textDecorationLine: "line-through"
    },
    removeTaskButtonImage: {
        borderRadius: 4,
        width: 32,
        height: 38,
    },
    markTaskImage:{
        width: 18,
        height: 18,
    }
})