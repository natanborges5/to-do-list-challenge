import {View, Text, TouchableOpacity, Image} from "react-native"
import { styles } from "./styles"

type Props = {
    name: string,
    id: string,
    done: boolean,
}
export function Task(props: Props){
    return(
        <View  style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.markTaskImage} source={require("../../../assets/uncheck.png")}/>
        </TouchableOpacity>
            <Text style={styles.taskText}>{props.name}</Text>
            <TouchableOpacity>
                <Image style={styles.removeTaskButtonImage} source={require("../../../assets/bin.png")}/>
            </TouchableOpacity>
        </View>
    )
}