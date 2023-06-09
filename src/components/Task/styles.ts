import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#333333",
        borderRadius: 3,
        borderColor: "white",
        borderWidth: 0.2,
        alignItems: "center",
        
    },
    taskText: {
        color: "white",
        fontSize: 14,
        textAlign: "center",
        textAlignVertical: "center",
        flexWrap: "wrap",
        height: "100%",
        width: "86%"
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