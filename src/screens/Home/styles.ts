import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1A1A1A",
        flex: 1,
        padding: 24,
    },
    title1: {
        color: "#4EA8DE",
        fontSize: 36,
        fontWeight: "bold"
    },
    title2: {
        color: "#5e60ce",
        fontSize: 36,
        fontWeight: "bold"
    },
    tinyLogo:{
        marginTop: 10,
        marginRight: 10,
        alignContent: "center"
    },
    titleArea: {
        marginTop: 10,
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
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
        backgroundColor: "#262626",
        borderRadius: 4,
        marginRight: 6,
        color: "#808080",
        padding: 10,
        fontSize: 16,
    },
    addButton: {
        width: 52,
        height: 52,
        borderRadius: 6,
        backgroundColor: "#4EA8DE",
        alignItems: "center",
        justifyContent: "center",
    },
    taskArea: {
        backgroundColor: "#1A1A1A",
        flex: 1,
        width: "100%",
    },
    taskCounterArea: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
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
    },
    listEmptyImage: {
        marginTop: 30,
        marginBottom: 10,
        alignContent: "center",
        alignSelf: "center"
    },
    listEmptyText: {
        textAlign: "center",
        fontSize: 14,
        color: "#808080"
    }
})