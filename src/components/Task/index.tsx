import {View, Text, TouchableOpacity, Image} from "react-native"
import { styles } from "./styles"

type Props = {
    name: string,
    id: string,
    done: boolean,
    onRemove: () => void,
    onConclude: () => void,
}
export function Task(props: Props){
    return(
        <View style={styles.container}>
            {props.done && (
                <>
                    <TouchableOpacity onPress={props.onConclude}>
                        <Image style={styles.markTaskImage} source={require("../../../assets/check.png")}/>
                    </TouchableOpacity>
                    <Text style={styles.taskTextDone}>{props.name}</Text>
                </>
            )}
            {!props.done && (
                <>
                    <TouchableOpacity onPress={props.onConclude}>
                        <Image style={styles.markTaskImage} source={require("../../../assets/uncheck.png")}/>
                    </TouchableOpacity>
                    <Text style={styles.taskText}>{props.name}</Text>
                </>
            )}
            <TouchableOpacity onPress={props.onRemove}>
                <Image style={styles.removeTaskButtonImage} source={require("../../../assets/bin.png")}/>
            </TouchableOpacity>
        </View>
    )
}