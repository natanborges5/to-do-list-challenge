import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1A1A1A",
        flex: 1,
        padding: 24,
    },
    title: {
        color: "#4EA8DE",
        textAlign: "center",
        marginTop: 10,
        fontSize: 36,
        fontWeight: "bold"
    },
    form:{
        marginTop: 36,
        marginBottom: 42,
        width: "100%",
        flexDirection: "row",
    },
    input:{
        flex: 1,
        height: 56,
        backgroundColor: "#333333",
        borderRadius: 4,
        marginRight: 6,
    },
    addButton: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#4EA8DE",
        alignItems: "center",
        justifyContent: "center",
    },
    addButtonText: {

    },
    taskArea: {
        backgroundColor: "#1A1A1A",
        flex: 1,
        width: "100%",
    },
    taskCounterArea: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    taskBanner: {
        flexDirection: "row",
        alignItems: "center",
    },
    taskBannerText: {
        marginRight: 12,
        color: "#4EA8DE",
        fontSize: 17,
        fontWeight: "bold"
    },
    taskBannerConcludeText: {
        marginRight: 12,
        color: "#8284FA",
        fontSize: 17,
        fontWeight: "bold"
    },
    taskBannerCounter: {
        backgroundColor: "#333333",
        borderRadius: 20,
        width: 30,
        fontSize: 15,
        color: "white",
        textAlign: "center",
        fontWeight: "bold"
    },
    hrline: {
        marginTop: 15,
        borderBottomColor: '#808080',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }

})